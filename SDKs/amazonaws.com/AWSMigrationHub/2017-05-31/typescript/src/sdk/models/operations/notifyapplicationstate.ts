import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum NotifyApplicationStateXAmzTargetEnum {
    AwsMigrationHubNotifyApplicationState = "AWSMigrationHub.NotifyApplicationState"
}


export class NotifyApplicationStateHeaders extends SpeakeasyBase {
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
  xAmzTarget: NotifyApplicationStateXAmzTargetEnum;
}


export class NotifyApplicationStateRequest extends SpeakeasyBase {
  @Metadata()
  headers: NotifyApplicationStateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NotifyApplicationStateRequest;
}


export class NotifyApplicationStateResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  dryRunOperation?: any;

  @Metadata()
  homeRegionNotSetException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  notifyApplicationStateResult?: Map<string, any>;

  @Metadata()
  policyErrorException?: any;

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
