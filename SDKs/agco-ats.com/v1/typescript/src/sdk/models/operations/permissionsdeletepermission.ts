import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PermissionsDeletePermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PermissionsDeletePermissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PermissionsDeletePermissionPathParams;
}


export class PermissionsDeletePermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
