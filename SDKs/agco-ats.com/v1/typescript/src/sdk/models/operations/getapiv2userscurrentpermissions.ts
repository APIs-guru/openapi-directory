import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV2UsersCurrentPermissionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Permission" })
  permission?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetApiV2UsersCurrentPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiV2UsersCurrentPermissionsQueryParams;
}


export class GetApiV2UsersCurrentPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseApiModelsUserEffectivePermission?: shared.ApiPagedResponseApiModelsUserEffectivePermission;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
