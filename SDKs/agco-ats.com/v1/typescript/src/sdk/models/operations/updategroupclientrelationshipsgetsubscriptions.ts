import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupClientRelationshipsGetSubscriptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" })
  updateGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class UpdateGroupClientRelationshipsGetSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UpdateGroupClientRelationshipsGetSubscriptionsQueryParams;
}


export class UpdateGroupClientRelationshipsGetSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseUpdateSystemModelsUpdateGroupClientRelationship?: shared.ApiPagedResponseUpdateSystemModelsUpdateGroupClientRelationship;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
