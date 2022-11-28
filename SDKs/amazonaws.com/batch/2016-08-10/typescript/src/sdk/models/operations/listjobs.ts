import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListJobsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListJobsHeaders extends SpeakeasyBase {
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

export enum ListJobsRequestBodyJobStatusEnum {
    Submitted = "SUBMITTED",
    Pending = "PENDING",
    Runnable = "RUNNABLE",
    Starting = "STARTING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}


export class ListJobsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arrayJobId" })
  arrayJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: shared.KeyValuesPair })
  filters?: shared.KeyValuesPair[];

  @SpeakeasyMetadata({ data: "json, name=jobQueue" })
  jobQueue?: string;

  @SpeakeasyMetadata({ data: "json, name=jobStatus" })
  jobStatus?: ListJobsRequestBodyJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=multiNodeJobId" })
  multiNodeJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}


export class ListJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListJobsQueryParams;

  @SpeakeasyMetadata()
  headers: ListJobsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListJobsRequestBody;
}


export class ListJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listJobsResponse?: shared.ListJobsResponse;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
