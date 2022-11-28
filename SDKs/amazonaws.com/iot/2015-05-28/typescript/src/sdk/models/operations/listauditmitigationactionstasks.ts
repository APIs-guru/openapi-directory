import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListAuditMitigationActionsTasksTaskStatusEnum {
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
    Failed = "FAILED",
    Canceled = "CANCELED"
}


export class ListAuditMitigationActionsTasksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auditTaskId" })
  auditTaskId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=findingId" })
  findingId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taskStatus" })
  taskStatus?: ListAuditMitigationActionsTasksTaskStatusEnum;
}


export class ListAuditMitigationActionsTasksHeaders extends SpeakeasyBase {
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


export class ListAuditMitigationActionsTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAuditMitigationActionsTasksQueryParams;

  @SpeakeasyMetadata()
  headers: ListAuditMitigationActionsTasksHeaders;
}


export class ListAuditMitigationActionsTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  listAuditMitigationActionsTasksResponse?: shared.ListAuditMitigationActionsTasksResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
