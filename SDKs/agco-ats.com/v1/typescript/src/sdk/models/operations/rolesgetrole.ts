import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RolesGetRolePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RolesGetRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RolesGetRolePathParams;
}


export class RolesGetRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsRole?: shared.ApiModelsRole;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
