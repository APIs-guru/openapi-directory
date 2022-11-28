import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LicenseActivationsPutPathParams extends SpeakeasyBase {
    id: string;
}
export declare class LicenseActivationsPutRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    dealerDbModelsLicenseActivationUpdate?: shared.DealerDbModelsLicenseActivationUpdate;
    dealerDbModelsLicenseActivationUpdate1?: shared.DealerDbModelsLicenseActivationUpdate;
    dealerDbModelsLicenseActivationUpdate2?: shared.DealerDbModelsLicenseActivationUpdate;
    textXml: Uint8Array;
}
export declare class LicenseActivationsPutRequest extends SpeakeasyBase {
    pathParams: LicenseActivationsPutPathParams;
    request: LicenseActivationsPutRequests;
}
export declare class LicenseActivationsPutResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    dealerDbModelsLicenseActivation?: shared.DealerDbModelsLicenseActivation;
    statusCode: number;
}
