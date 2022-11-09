import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAccountsAccountIdAppsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;
}


export class PostAccountsAccountIdAppsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostAccountsAccountIdAppsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAccountsAccountIdAppsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AppPost;

  @Metadata()
  security: PostAccountsAccountIdAppsSecurity;
}


export class PostAccountsAccountIdAppsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  appResponse?: shared.AppResponse;

  @Metadata()
  error?: shared.Error;
}
