import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAccountsAccountIdAppsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class PostAccountsAccountIdAppsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostAccountsAccountIdAppsRequest extends SpeakeasyBase {
    pathParams: PostAccountsAccountIdAppsPathParams;
    request?: shared.AppPost;
    security: PostAccountsAccountIdAppsSecurity;
}
export declare class PostAccountsAccountIdAppsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appResponse?: shared.AppResponse;
    error?: shared.Error;
}
