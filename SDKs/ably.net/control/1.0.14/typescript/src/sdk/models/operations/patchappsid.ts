import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchAppsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchAppsIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchAppsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchAppsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AppPatch;

  @SpeakeasyMetadata()
  security: PatchAppsIdSecurity;
}


export class PatchAppsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  appResponse?: shared.AppResponse;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
