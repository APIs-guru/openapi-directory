import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListActiveViolationsBehaviorCriteriaTypeEnum {
    Static = "STATIC",
    Statistical = "STATISTICAL",
    MachineLearning = "MACHINE_LEARNING"
}


export class ListActiveViolationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=behaviorCriteriaType" })
  behaviorCriteriaType?: ListActiveViolationsBehaviorCriteriaTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=listSuppressedAlerts" })
  listSuppressedAlerts?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=securityProfileName" })
  securityProfileName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=thingName" })
  thingName?: string;
}


export class ListActiveViolationsHeaders extends SpeakeasyBase {
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


export class ListActiveViolationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListActiveViolationsQueryParams;

  @SpeakeasyMetadata()
  headers: ListActiveViolationsHeaders;
}


export class ListActiveViolationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  listActiveViolationsResponse?: shared.ListActiveViolationsResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
