import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PermissionsPutPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PermissionsPutPermissionRequests extends SpeakeasyBase {
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


export class PermissionsPutPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PermissionsPutPermissionPathParams;

  @SpeakeasyMetadata()
  request: PermissionsPutPermissionRequests;
}


export class PermissionsPutPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
