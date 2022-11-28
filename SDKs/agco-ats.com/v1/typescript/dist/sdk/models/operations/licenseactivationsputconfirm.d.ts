import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LicenseActivationsPutConfirmPathParams extends SpeakeasyBase {
    id: string;
}
export declare class LicenseActivationsPutConfirmRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    dealerDbModelsLicenseActivationConfirm?: shared.DealerDbModelsLicenseActivationConfirm;
    dealerDbModelsLicenseActivationConfirm1?: shared.DealerDbModelsLicenseActivationConfirm;
    dealerDbModelsLicenseActivationConfirm2?: shared.DealerDbModelsLicenseActivationConfirm;
    textXml: Uint8Array;
}
export declare class LicenseActivationsPutConfirmRequest extends SpeakeasyBase {
    pathParams: LicenseActivationsPutConfirmPathParams;
    request: LicenseActivationsPutConfirmRequests;
}
export declare class LicenseActivationsPutConfirmResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
