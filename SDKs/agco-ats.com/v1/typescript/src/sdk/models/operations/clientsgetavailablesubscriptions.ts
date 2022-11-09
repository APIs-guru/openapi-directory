import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClientsGetAvailableSubscriptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class ClientsGetAvailableSubscriptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" })
  updateGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ClientsGetAvailableSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClientsGetAvailableSubscriptionsPathParams;

  @Metadata()
  queryParams: ClientsGetAvailableSubscriptionsQueryParams;
}


export class ClientsGetAvailableSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription?: shared.ApiPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
