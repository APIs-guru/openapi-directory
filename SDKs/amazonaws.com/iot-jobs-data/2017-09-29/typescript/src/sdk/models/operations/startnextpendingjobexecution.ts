import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartNextPendingJobExecutionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thingName" })
  thingName: string;
}


export class StartNextPendingJobExecutionHeaders extends SpeakeasyBase {
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
}


export class StartNextPendingJobExecutionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=statusDetails" })
  statusDetails?: Map<string, string>;

  @Metadata({ data: "json, name=stepTimeoutInMinutes" })
  stepTimeoutInMinutes?: number;
}


export class StartNextPendingJobExecutionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StartNextPendingJobExecutionPathParams;

  @Metadata()
  headers: StartNextPendingJobExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartNextPendingJobExecutionRequestBody;
}


export class StartNextPendingJobExecutionResponse extends SpeakeasyBase {
  @Metadata()
  certificateValidationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  startNextPendingJobExecutionResponse?: shared.StartNextPendingJobExecutionResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
