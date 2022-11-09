import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PackageTypeID" })
  packageTypeId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" })
  updateGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams;
}


export class UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseUpdateSystemModelsUpdateGroupSubscription?: shared.ApiPagedResponseUpdateSystemModelsUpdateGroupSubscription;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
