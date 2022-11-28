import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PermissionsGetPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PermissionsGetPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PermissionsGetPermissionPathParams;
}


export class PermissionsGetPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsPermission?: shared.ApiModelsPermission;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
