import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListAuditMitigationActionsTasksTaskStatusEnum {
    InProgress = "IN_PROGRESS"
,    Completed = "COMPLETED"
,    Failed = "FAILED"
,    Canceled = "CANCELED"
}


export class ListAuditMitigationActionsTasksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=auditTaskId" })
  auditTaskId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=findingId" })
  findingId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=taskStatus" })
  taskStatus?: ListAuditMitigationActionsTasksTaskStatusEnum;
}


export class ListAuditMitigationActionsTasksHeaders extends SpeakeasyBase {
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


export class ListAuditMitigationActionsTasksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAuditMitigationActionsTasksQueryParams;

  @Metadata()
  headers: ListAuditMitigationActionsTasksHeaders;
}


export class ListAuditMitigationActionsTasksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listAuditMitigationActionsTasksResponse?: shared.ListAuditMitigationActionsTasksResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
