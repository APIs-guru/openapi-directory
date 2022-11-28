import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PackageTypeID" })
  packageTypeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" })
  updateGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams;
}


export class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseUpdateSystemModelsUpdateGroupSubscription?: shared.ApiPagedResponseUpdateSystemModelsUpdateGroupSubscription;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
