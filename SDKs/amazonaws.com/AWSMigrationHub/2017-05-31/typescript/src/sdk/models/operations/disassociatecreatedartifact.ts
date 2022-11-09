import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateCreatedArtifactXAmzTargetEnum {
    AwsMigrationHubDisassociateCreatedArtifact = "AWSMigrationHub.DisassociateCreatedArtifact"
}


export class DisassociateCreatedArtifactHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DisassociateCreatedArtifactXAmzTargetEnum;
}


export class DisassociateCreatedArtifactRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateCreatedArtifactHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateCreatedArtifactRequest;
}


export class DisassociateCreatedArtifactResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  disassociateCreatedArtifactResult?: Map<string, any>;

  @Metadata()
  dryRunOperation?: any;

  @Metadata()
  homeRegionNotSetException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedOperation?: any;
}
