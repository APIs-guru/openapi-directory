import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListJobExecutionsForThingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thingName" })
  thingName: string;
}

export enum ListJobExecutionsForThingStatusEnum {
    Queued = "QUEUED"
,    InProgress = "IN_PROGRESS"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    TimedOut = "TIMED_OUT"
,    Rejected = "REJECTED"
,    Removed = "REMOVED"
,    Canceled = "CANCELED"
}


export class ListJobExecutionsForThingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=namespaceId" })
  namespaceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ListJobExecutionsForThingStatusEnum;
}


export class ListJobExecutionsForThingHeaders extends SpeakeasyBase {
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


export class ListJobExecutionsForThingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListJobExecutionsForThingPathParams;

  @Metadata()
  queryParams: ListJobExecutionsForThingQueryParams;

  @Metadata()
  headers: ListJobExecutionsForThingHeaders;
}


export class ListJobExecutionsForThingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listJobExecutionsForThingResponse?: shared.ListJobExecutionsForThingResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
