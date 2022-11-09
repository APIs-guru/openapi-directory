import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PermissionsGetPermissionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class PermissionsGetPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PermissionsGetPermissionsQueryParams;
}


export class PermissionsGetPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  apiPagedResponseApiModelsPermission?: shared.ApiPagedResponseApiModelsPermission;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
