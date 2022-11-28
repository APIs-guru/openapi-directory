import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizationCodesGetContactInformationPathParams extends SpeakeasyBase {
    id: number;
}
export declare class AuthorizationCodesGetContactInformationRequest extends SpeakeasyBase {
    pathParams: AuthorizationCodesGetContactInformationPathParams;
}
export declare class AuthorizationCodesGetContactInformationResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    authorizationCodesSharedModelsAuthorizationContactInformation?: shared.AuthorizationCodesSharedModelsAuthorizationContactInformation;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
