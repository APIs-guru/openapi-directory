import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizationCodesValidateAuthorizationCodePathParams extends SpeakeasyBase {
    id: number;
}
export declare class AuthorizationCodesValidateAuthorizationCodeRequest extends SpeakeasyBase {
    pathParams: AuthorizationCodesValidateAuthorizationCodePathParams;
}
export declare class AuthorizationCodesValidateAuthorizationCodeResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    authorizationCodesSharedModelsCodeValidationModel?: shared.AuthorizationCodesSharedModelsCodeValidationModel;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
