import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PermissionsPostPermissionRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiModelsPermission?: shared.ApiModelsPermission;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsPermission1?: shared.ApiModelsPermission;

  @Metadata({ data: "request, media_type=text/json" })
  apiModelsPermission2?: shared.ApiModelsPermission;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class PermissionsPostPermissionRequest extends SpeakeasyBase {
  @Metadata()
  request: PermissionsPostPermissionRequests;
}


export class PermissionsPostPermissionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  permissionsPostPermission200ApplicationJsonInt32Integer?: number;

  @Metadata()
  permissionsPostPermission200TextJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
