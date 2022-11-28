import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAppsAppIdKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class GetAppsAppIdKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAppsAppIdKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAppsAppIdKeysPathParams;

  @SpeakeasyMetadata()
  security: GetAppsAppIdKeysSecurity;
}


export class GetAppsAppIdKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.KeyResponse })
  keyResponses?: shared.KeyResponse[];
}
