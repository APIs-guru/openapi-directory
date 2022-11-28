import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClientsGetAvailableSubscriptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class ClientsGetAvailableSubscriptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" })
  updateGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ClientsGetAvailableSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClientsGetAvailableSubscriptionsPathParams;

  @SpeakeasyMetadata()
  queryParams: ClientsGetAvailableSubscriptionsQueryParams;
}


export class ClientsGetAvailableSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription?: shared.ApiPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
