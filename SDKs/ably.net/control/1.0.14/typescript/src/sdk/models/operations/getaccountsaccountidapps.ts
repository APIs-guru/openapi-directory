import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountsAccountIdAppsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;
}


export class GetAccountsAccountIdAppsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountsAccountIdAppsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountsAccountIdAppsPathParams;

  @Metadata()
  security: GetAccountsAccountIdAppsSecurity;
}


export class GetAccountsAccountIdAppsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.AppResponse })
  appResponses?: shared.AppResponse[];

  @Metadata()
  error?: shared.Error;
}
