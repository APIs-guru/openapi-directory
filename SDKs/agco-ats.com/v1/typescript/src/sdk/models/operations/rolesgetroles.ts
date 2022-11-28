import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RolesGetRolesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class RolesGetRolesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RolesGetRolesQueryParams;
}


export class RolesGetRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiPagedResponseApiModelsRole?: shared.ApiPagedResponseApiModelsRole;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
