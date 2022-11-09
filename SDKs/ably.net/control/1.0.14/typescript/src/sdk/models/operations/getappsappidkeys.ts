import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAppsAppIdKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class GetAppsAppIdKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAppsAppIdKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAppsAppIdKeysPathParams;

  @Metadata()
  security: GetAppsAppIdKeysSecurity;
}


export class GetAppsAppIdKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.KeyResponse })
  keyResponses?: shared.KeyResponse[];
}
