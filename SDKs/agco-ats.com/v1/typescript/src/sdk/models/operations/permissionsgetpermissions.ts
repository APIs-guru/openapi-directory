import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PermissionsGetPermissionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class PermissionsGetPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PermissionsGetPermissionsQueryParams;
}


export class PermissionsGetPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiPagedResponseApiModelsPermission?: shared.ApiPagedResponseApiModelsPermission;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
