import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RolesGetRolesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class RolesGetRolesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RolesGetRolesQueryParams;
}


export class RolesGetRolesResponse extends SpeakeasyBase {
  @Metadata()
  apiPagedResponseApiModelsRole?: shared.ApiPagedResponseApiModelsRole;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
