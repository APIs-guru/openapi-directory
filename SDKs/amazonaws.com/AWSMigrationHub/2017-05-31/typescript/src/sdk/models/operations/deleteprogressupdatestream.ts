import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteProgressUpdateStreamXAmzTargetEnum {
    AwsMigrationHubDeleteProgressUpdateStream = "AWSMigrationHub.DeleteProgressUpdateStream"
}


export class DeleteProgressUpdateStreamHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteProgressUpdateStreamXAmzTargetEnum;
}


export class DeleteProgressUpdateStreamRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteProgressUpdateStreamHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteProgressUpdateStreamRequest;
}


export class DeleteProgressUpdateStreamResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteProgressUpdateStreamResult?: Map<string, any>;

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
