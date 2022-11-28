import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizationCodesGetAuthorizationCodePathParams extends SpeakeasyBase {
    id: number;
}
export declare class AuthorizationCodesGetAuthorizationCodeRequest extends SpeakeasyBase {
    pathParams: AuthorizationCodesGetAuthorizationCodePathParams;
}
export declare class AuthorizationCodesGetAuthorizationCodeResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    authorizationCodesSharedModelsAuthorizationCode?: shared.AuthorizationCodesSharedModelsAuthorizationCode;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
