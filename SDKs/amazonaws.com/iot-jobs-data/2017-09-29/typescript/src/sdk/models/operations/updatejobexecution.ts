import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateJobExecutionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=thingName" })
  thingName: string;
}


export class UpdateJobExecutionHeaders extends SpeakeasyBase {
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

export enum UpdateJobExecutionRequestBodyStatusEnum {
    Queued = "QUEUED"
,    InProgress = "IN_PROGRESS"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    TimedOut = "TIMED_OUT"
,    Rejected = "REJECTED"
,    Removed = "REMOVED"
,    Canceled = "CANCELED"
}


export class UpdateJobExecutionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionNumber" })
  executionNumber?: number;

  @Metadata({ data: "json, name=expectedVersion" })
  expectedVersion?: number;

  @Metadata({ data: "json, name=includeJobDocument" })
  includeJobDocument?: boolean;

  @Metadata({ data: "json, name=includeJobExecutionState" })
  includeJobExecutionState?: boolean;

  @Metadata({ data: "json, name=status" })
  status: UpdateJobExecutionRequestBodyStatusEnum;

  @Metadata({ data: "json, name=statusDetails" })
  statusDetails?: Map<string, string>;

  @Metadata({ data: "json, name=stepTimeoutInMinutes" })
  stepTimeoutInMinutes?: number;
}


export class UpdateJobExecutionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateJobExecutionPathParams;

  @Metadata()
  headers: UpdateJobExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateJobExecutionRequestBody;
}


export class UpdateJobExecutionResponse extends SpeakeasyBase {
  @Metadata()
  certificateValidationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  invalidStateTransitionException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateJobExecutionResponse?: shared.UpdateJobExecutionResponse;
}
