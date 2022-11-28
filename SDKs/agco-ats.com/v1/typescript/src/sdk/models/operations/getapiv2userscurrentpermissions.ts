import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV2UsersCurrentPermissionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Permission" })
  permission?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetApiV2UsersCurrentPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV2UsersCurrentPermissionsQueryParams;
}


export class GetApiV2UsersCurrentPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseApiModelsUserEffectivePermission?: shared.ApiPagedResponseApiModelsUserEffectivePermission;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
