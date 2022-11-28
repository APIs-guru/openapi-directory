import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsAccountIdAppsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountsAccountIdAppsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAccountsAccountIdAppsRequest extends SpeakeasyBase {
    pathParams: GetAccountsAccountIdAppsPathParams;
    security: GetAccountsAccountIdAppsSecurity;
}
export declare class GetAccountsAccountIdAppsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appResponses?: shared.AppResponse[];
    error?: shared.Error;
}
