import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizationContactInformationPostRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    authorizationCodesSharedModelsAuthorizationContactInformation?: shared.AuthorizationCodesSharedModelsAuthorizationContactInformation;
    authorizationCodesSharedModelsAuthorizationContactInformation1?: shared.AuthorizationCodesSharedModelsAuthorizationContactInformation;
    authorizationCodesSharedModelsAuthorizationContactInformation2?: shared.AuthorizationCodesSharedModelsAuthorizationContactInformation;
    textXml: Uint8Array;
}
export declare class AuthorizationContactInformationPostRequest extends SpeakeasyBase {
    request: AuthorizationContactInformationPostRequests;
}
export declare class AuthorizationContactInformationPostResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    authorizationContactInformationPost200ApplicationJsonInt32Integer?: number;
    authorizationContactInformationPost200TextJsonInt32Integer?: number;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
