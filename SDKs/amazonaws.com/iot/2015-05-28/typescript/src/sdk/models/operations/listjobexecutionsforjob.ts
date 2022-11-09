import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListJobExecutionsForJobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}

export enum ListJobExecutionsForJobStatusEnum {
    Queued = "QUEUED"
,    InProgress = "IN_PROGRESS"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    TimedOut = "TIMED_OUT"
,    Rejected = "REJECTED"
,    Removed = "REMOVED"
,    Canceled = "CANCELED"
}


export class ListJobExecutionsForJobQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ListJobExecutionsForJobStatusEnum;
}


export class ListJobExecutionsForJobHeaders extends SpeakeasyBase {
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


export class ListJobExecutionsForJobRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListJobExecutionsForJobPathParams;

  @Metadata()
  queryParams: ListJobExecutionsForJobQueryParams;

  @Metadata()
  headers: ListJobExecutionsForJobHeaders;
}


export class ListJobExecutionsForJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listJobExecutionsForJobResponse?: shared.ListJobExecutionsForJobResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
