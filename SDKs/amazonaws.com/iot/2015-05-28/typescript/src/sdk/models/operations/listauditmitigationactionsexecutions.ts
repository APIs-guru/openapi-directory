import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListAuditMitigationActionsExecutionsActionStatusEnum {
    InProgress = "IN_PROGRESS"
,    Completed = "COMPLETED"
,    Failed = "FAILED"
,    Canceled = "CANCELED"
,    Skipped = "SKIPPED"
,    Pending = "PENDING"
}


export class ListAuditMitigationActionsExecutionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=actionStatus" })
  actionStatus?: ListAuditMitigationActionsExecutionsActionStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=findingId" })
  findingId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=taskId" })
  taskId: string;
}


export class ListAuditMitigationActionsExecutionsHeaders extends SpeakeasyBase {
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


export class ListAuditMitigationActionsExecutionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAuditMitigationActionsExecutionsQueryParams;

  @Metadata()
  headers: ListAuditMitigationActionsExecutionsHeaders;
}


export class ListAuditMitigationActionsExecutionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listAuditMitigationActionsExecutionsResponse?: shared.ListAuditMitigationActionsExecutionsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
