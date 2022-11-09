import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListEventSubscriptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListEventSubscriptionsXAmzTargetEnum {
    InspectorServiceListEventSubscriptions = "InspectorService.ListEventSubscriptions"
}


export class ListEventSubscriptionsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListEventSubscriptionsXAmzTargetEnum;
}


export class ListEventSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListEventSubscriptionsQueryParams;

  @Metadata()
  headers: ListEventSubscriptionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListEventSubscriptionsRequest;
}


export class ListEventSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  listEventSubscriptionsResponse?: shared.ListEventSubscriptionsResponse;

  @Metadata()
  noSuchEntityException?: any;

  @Metadata()
  statusCode: number;
}
