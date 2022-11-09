import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDetectMitigationActionsExecutionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=taskId" })
  taskId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=thingName" })
  thingName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=violationId" })
  violationId?: string;
}


export class ListDetectMitigationActionsExecutionsHeaders extends SpeakeasyBase {
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


export class ListDetectMitigationActionsExecutionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDetectMitigationActionsExecutionsQueryParams;

  @Metadata()
  headers: ListDetectMitigationActionsExecutionsHeaders;
}


export class ListDetectMitigationActionsExecutionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listDetectMitigationActionsExecutionsResponse?: shared.ListDetectMitigationActionsExecutionsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
