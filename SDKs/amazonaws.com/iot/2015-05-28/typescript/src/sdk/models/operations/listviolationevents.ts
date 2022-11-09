import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListViolationEventsBehaviorCriteriaTypeEnum {
    Static = "STATIC"
,    Statistical = "STATISTICAL"
,    MachineLearning = "MACHINE_LEARNING"
}


export class ListViolationEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=behaviorCriteriaType" })
  behaviorCriteriaType?: ListViolationEventsBehaviorCriteriaTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=listSuppressedAlerts" })
  listSuppressedAlerts?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=securityProfileName" })
  securityProfileName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=thingName" })
  thingName?: string;
}


export class ListViolationEventsHeaders extends SpeakeasyBase {
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


export class ListViolationEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListViolationEventsQueryParams;

  @Metadata()
  headers: ListViolationEventsHeaders;
}


export class ListViolationEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listViolationEventsResponse?: shared.ListViolationEventsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
