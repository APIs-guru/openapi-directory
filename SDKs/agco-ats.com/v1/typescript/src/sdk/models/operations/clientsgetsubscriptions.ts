import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClientsGetSubscriptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class ClientsGetSubscriptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" })
  updateGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ClientsGetSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClientsGetSubscriptionsPathParams;

  @SpeakeasyMetadata()
  queryParams: ClientsGetSubscriptionsQueryParams;
}


export class ClientsGetSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseUpdateSystemModelsUpdateGroupSubscription?: shared.ApiPagedResponseUpdateSystemModelsUpdateGroupSubscription;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
