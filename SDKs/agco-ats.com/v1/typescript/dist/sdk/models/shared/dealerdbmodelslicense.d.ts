import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DealerDbModelsLicenseLicenseActivationTypeEnum {
    Edt = "EDT",
    EdtLite = "EDTLite"
}
export declare class DealerDbModelsLicense extends SpeakeasyBase {
    active?: boolean;
    createdDate?: Date;
    deactivatedDate?: Date;
    licenseActivationType?: DealerDbModelsLicenseLicenseActivationTypeEnum;
    licenseId?: string;
    licenseVersion?: string;
    refreshDate?: Date;
    systemInfo?: string;
    updatedLicenseVersion?: string;
    voucherCode?: string;
}
