import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListActiveViolationsBehaviorCriteriaTypeEnum {
    Static = "STATIC"
,    Statistical = "STATISTICAL"
,    MachineLearning = "MACHINE_LEARNING"
}


export class ListActiveViolationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=behaviorCriteriaType" })
  behaviorCriteriaType?: ListActiveViolationsBehaviorCriteriaTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=listSuppressedAlerts" })
  listSuppressedAlerts?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=securityProfileName" })
  securityProfileName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=thingName" })
  thingName?: string;
}


export class ListActiveViolationsHeaders extends SpeakeasyBase {
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


export class ListActiveViolationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListActiveViolationsQueryParams;

  @Metadata()
  headers: ListActiveViolationsHeaders;
}


export class ListActiveViolationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listActiveViolationsResponse?: shared.ListActiveViolationsResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
