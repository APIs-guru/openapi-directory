import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAppsIdPkcs12PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostAppsIdPkcs12Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostAppsIdPkcs12Request extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAppsIdPkcs12PathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.AppPkcs12;

  @Metadata()
  security: PostAppsIdPkcs12Security;
}


export class PostAppsIdPkcs12Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  appResponse?: shared.AppResponse;

  @Metadata()
  error?: shared.Error;
}
