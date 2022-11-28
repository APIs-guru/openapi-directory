import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartTriggerXAmzTargetEnum {
    AwsGlueStartTrigger = "AWSGlue.StartTrigger"
}


export class StartTriggerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: StartTriggerXAmzTargetEnum;
}


export class StartTriggerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartTriggerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartTriggerRequest;
}


export class StartTriggerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  concurrentRunsExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  entityNotFoundException?: any;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  operationTimeoutException?: any;

  @SpeakeasyMetadata()
  resourceNumberLimitExceededException?: any;

  @SpeakeasyMetadata()
  startTriggerResponse?: shared.StartTriggerResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
