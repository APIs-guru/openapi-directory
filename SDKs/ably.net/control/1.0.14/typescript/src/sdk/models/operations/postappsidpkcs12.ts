import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAppsIdPkcs12PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostAppsIdPkcs12Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostAppsIdPkcs12Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAppsIdPkcs12PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.AppPkcs12;

  @SpeakeasyMetadata()
  security: PostAppsIdPkcs12Security;
}


export class PostAppsIdPkcs12Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  appResponse?: shared.AppResponse;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
