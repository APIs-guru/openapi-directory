import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateJobExecutionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingName" })
  thingName: string;
}


export class UpdateJobExecutionHeaders extends SpeakeasyBase {
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

export enum UpdateJobExecutionRequestBodyStatusEnum {
    Queued = "QUEUED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    TimedOut = "TIMED_OUT",
    Rejected = "REJECTED",
    Removed = "REMOVED",
    Canceled = "CANCELED"
}


export class UpdateJobExecutionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionNumber" })
  executionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=expectedVersion" })
  expectedVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=includeJobDocument" })
  includeJobDocument?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeJobExecutionState" })
  includeJobExecutionState?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: UpdateJobExecutionRequestBodyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusDetails" })
  statusDetails?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=stepTimeoutInMinutes" })
  stepTimeoutInMinutes?: number;
}


export class UpdateJobExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateJobExecutionPathParams;

  @SpeakeasyMetadata()
  headers: UpdateJobExecutionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateJobExecutionRequestBody;
}


export class UpdateJobExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateValidationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  invalidStateTransitionException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateJobExecutionResponse?: shared.UpdateJobExecutionResponse;
}
