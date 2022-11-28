import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthenticationResetPaswordRequests extends SpeakeasyBase {
    apiModelsPasswordReset?: shared.ApiModelsPasswordReset;
    apiModelsPasswordReset1?: shared.ApiModelsPasswordReset;
    apiModelsPasswordReset2?: shared.ApiModelsPasswordReset;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class AuthenticationResetPaswordRequest extends SpeakeasyBase {
    request: AuthenticationResetPaswordRequests;
}
export declare class AuthenticationResetPaswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
