import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchAppsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchAppsIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchAppsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchAppsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AppPatch;

  @Metadata()
  security: PatchAppsIdSecurity;
}


export class PatchAppsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  appResponse?: shared.AppResponse;

  @Metadata()
  error?: shared.Error;
}
