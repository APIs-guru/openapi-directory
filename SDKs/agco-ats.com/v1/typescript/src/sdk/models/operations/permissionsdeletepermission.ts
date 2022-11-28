import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PermissionsDeletePermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PermissionsDeletePermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PermissionsDeletePermissionPathParams;
}


export class PermissionsDeletePermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
