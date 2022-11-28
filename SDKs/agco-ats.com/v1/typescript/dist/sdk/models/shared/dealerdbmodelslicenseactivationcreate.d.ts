import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnum {
    Edt = "EDT",
    EdtLite = "EDTLite"
}
export declare class DealerDbModelsLicenseActivationCreate extends SpeakeasyBase {
    dealerCode: string;
    licenseActivationType?: DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnum;
    postalCode: string;
    systemInfo: string;
    voucherCode: string;
}
