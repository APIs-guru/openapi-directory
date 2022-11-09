import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PermissionsGetPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PermissionsGetPermissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PermissionsGetPermissionPathParams;
}


export class PermissionsGetPermissionResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsPermission?: shared.ApiModelsPermission;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
