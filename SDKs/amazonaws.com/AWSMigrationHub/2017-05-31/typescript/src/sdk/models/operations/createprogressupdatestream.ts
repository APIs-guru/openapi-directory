import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateProgressUpdateStreamXAmzTargetEnum {
    AwsMigrationHubCreateProgressUpdateStream = "AWSMigrationHub.CreateProgressUpdateStream"
}


export class CreateProgressUpdateStreamHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateProgressUpdateStreamXAmzTargetEnum;
}


export class CreateProgressUpdateStreamRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateProgressUpdateStreamHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateProgressUpdateStreamRequest;
}


export class CreateProgressUpdateStreamResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createProgressUpdateStreamResult?: Map<string, any>;

  @Metadata()
  dryRunOperation?: any;

  @Metadata()
  homeRegionNotSetException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedOperation?: any;
}
