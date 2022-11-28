import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LicenseActivationsPostRegisterEdtLiteRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    dealerDbModelsEdtLiteRegistration?: shared.DealerDbModelsEdtLiteRegistration;
    dealerDbModelsEdtLiteRegistration1?: shared.DealerDbModelsEdtLiteRegistration;
    dealerDbModelsEdtLiteRegistration2?: shared.DealerDbModelsEdtLiteRegistration;
    textXml: Uint8Array;
}
export declare class LicenseActivationsPostRegisterEdtLiteRequest extends SpeakeasyBase {
    request: LicenseActivationsPostRegisterEdtLiteRequests;
}
export declare class LicenseActivationsPostRegisterEdtLiteResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    licenseActivationsPostRegisterEdtLite200ApplicationJsonBoolean?: boolean;
    licenseActivationsPostRegisterEdtLite200TextJsonBoolean?: boolean;
    statusCode: number;
}
