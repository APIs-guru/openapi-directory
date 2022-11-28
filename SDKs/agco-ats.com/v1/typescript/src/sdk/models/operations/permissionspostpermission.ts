import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PermissionsPostPermissionRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiModelsPermission?: shared.ApiModelsPermission;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsPermission1?: shared.ApiModelsPermission;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiModelsPermission2?: shared.ApiModelsPermission;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class PermissionsPostPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: PermissionsPostPermissionRequests;
}


export class PermissionsPostPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  permissionsPostPermission200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  permissionsPostPermission200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
