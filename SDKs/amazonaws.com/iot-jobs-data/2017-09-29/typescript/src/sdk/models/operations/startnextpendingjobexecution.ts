import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartNextPendingJobExecutionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingName" })
  thingName: string;
}


export class StartNextPendingJobExecutionHeaders extends SpeakeasyBase {
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
}


export class StartNextPendingJobExecutionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=statusDetails" })
  statusDetails?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=stepTimeoutInMinutes" })
  stepTimeoutInMinutes?: number;
}


export class StartNextPendingJobExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StartNextPendingJobExecutionPathParams;

  @SpeakeasyMetadata()
  headers: StartNextPendingJobExecutionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartNextPendingJobExecutionRequestBody;
}


export class StartNextPendingJobExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateValidationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  startNextPendingJobExecutionResponse?: shared.StartNextPendingJobExecutionResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
