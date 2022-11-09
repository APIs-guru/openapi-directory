import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListJobsHeaders extends SpeakeasyBase {
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

export enum ListJobsRequestBodyJobStatusEnum {
    Submitted = "SUBMITTED"
,    Pending = "PENDING"
,    Runnable = "RUNNABLE"
,    Starting = "STARTING"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}


export class ListJobsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=arrayJobId" })
  arrayJobId?: string;

  @Metadata({ data: "json, name=filters", elemType: shared.KeyValuesPair })
  filters?: shared.KeyValuesPair[];

  @Metadata({ data: "json, name=jobQueue" })
  jobQueue?: string;

  @Metadata({ data: "json, name=jobStatus" })
  jobStatus?: ListJobsRequestBodyJobStatusEnum;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=multiNodeJobId" })
  multiNodeJobId?: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}


export class ListJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListJobsQueryParams;

  @Metadata()
  headers: ListJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListJobsRequestBody;
}


export class ListJobsResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  listJobsResponse?: shared.ListJobsResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
