import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListAuditTasksTaskStatusEnum {
    InProgress = "IN_PROGRESS"
,    Completed = "COMPLETED"
,    Failed = "FAILED"
,    Canceled = "CANCELED"
}

export enum ListAuditTasksTaskTypeEnum {
    OnDemandAuditTask = "ON_DEMAND_AUDIT_TASK"
,    ScheduledAuditTask = "SCHEDULED_AUDIT_TASK"
}


export class ListAuditTasksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=taskStatus" })
  taskStatus?: ListAuditTasksTaskStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=taskType" })
  taskType?: ListAuditTasksTaskTypeEnum;
}


export class ListAuditTasksHeaders extends SpeakeasyBase {
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


export class ListAuditTasksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAuditTasksQueryParams;

  @Metadata()
  headers: ListAuditTasksHeaders;
}


export class ListAuditTasksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listAuditTasksResponse?: shared.ListAuditTasksResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
