import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LicenseActivationsPostRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    dealerDbModelsLicenseActivationCreate?: shared.DealerDbModelsLicenseActivationCreate;
    dealerDbModelsLicenseActivationCreate1?: shared.DealerDbModelsLicenseActivationCreate;
    dealerDbModelsLicenseActivationCreate2?: shared.DealerDbModelsLicenseActivationCreate;
    textXml: Uint8Array;
}
export declare class LicenseActivationsPostRequest extends SpeakeasyBase {
    request: LicenseActivationsPostRequests;
}
export declare class LicenseActivationsPostResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    dealerDbModelsLicenseActivation?: shared.DealerDbModelsLicenseActivation;
    statusCode: number;
}
