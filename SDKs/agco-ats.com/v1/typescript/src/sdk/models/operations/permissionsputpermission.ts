import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PermissionsPutPermissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PermissionsPutPermissionRequests extends SpeakeasyBase {
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


export class PermissionsPutPermissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PermissionsPutPermissionPathParams;

  @Metadata()
  request: PermissionsPutPermissionRequests;
}


export class PermissionsPutPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
