import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAccountsAccountIdAppsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;
}


export class PostAccountsAccountIdAppsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostAccountsAccountIdAppsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAccountsAccountIdAppsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AppPost;

  @SpeakeasyMetadata()
  security: PostAccountsAccountIdAppsSecurity;
}


export class PostAccountsAccountIdAppsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  appResponse?: shared.AppResponse;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
