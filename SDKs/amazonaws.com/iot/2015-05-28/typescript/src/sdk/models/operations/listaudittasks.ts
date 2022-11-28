import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListAuditTasksTaskStatusEnum {
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
    Failed = "FAILED",
    Canceled = "CANCELED"
}

export enum ListAuditTasksTaskTypeEnum {
    OnDemandAuditTask = "ON_DEMAND_AUDIT_TASK",
    ScheduledAuditTask = "SCHEDULED_AUDIT_TASK"
}


export class ListAuditTasksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taskStatus" })
  taskStatus?: ListAuditTasksTaskStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taskType" })
  taskType?: ListAuditTasksTaskTypeEnum;
}


export class ListAuditTasksHeaders extends SpeakeasyBase {
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


export class ListAuditTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAuditTasksQueryParams;

  @SpeakeasyMetadata()
  headers: ListAuditTasksHeaders;
}


export class ListAuditTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  listAuditTasksResponse?: shared.ListAuditTasksResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
