import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthenticationDefaultRequests extends SpeakeasyBase {
    apiModelsCredentials?: shared.ApiModelsCredentials;
    apiModelsCredentials1?: shared.ApiModelsCredentials;
    apiModelsCredentials2?: shared.ApiModelsCredentials;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class AuthenticationDefaultRequest extends SpeakeasyBase {
    request: AuthenticationDefaultRequests;
}
export declare class AuthenticationDefaultResponse extends SpeakeasyBase {
    apiModelsAuthenticatedUser?: shared.ApiModelsAuthenticatedUser;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
