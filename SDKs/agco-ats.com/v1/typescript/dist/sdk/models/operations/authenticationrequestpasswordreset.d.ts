import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthenticationRequestPasswordResetRequests extends SpeakeasyBase {
    apiModelsPasswordResetRequest?: shared.ApiModelsPasswordResetRequest;
    apiModelsPasswordResetRequest1?: shared.ApiModelsPasswordResetRequest;
    apiModelsPasswordResetRequest2?: shared.ApiModelsPasswordResetRequest;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class AuthenticationRequestPasswordResetRequest extends SpeakeasyBase {
    request: AuthenticationRequestPasswordResetRequests;
}
export declare class AuthenticationRequestPasswordResetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
