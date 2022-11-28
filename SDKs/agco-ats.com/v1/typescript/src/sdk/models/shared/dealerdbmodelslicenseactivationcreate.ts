import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnum {
    Edt = "EDT",
    EdtLite = "EDTLite"
}


export class DealerDbModelsLicenseActivationCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DealerCode, form, name=DealerCode;" })
  dealerCode: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseActivationType, form, name=LicenseActivationType;" })
  licenseActivationType?: DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PostalCode, form, name=PostalCode;" })
  postalCode: string;

  @SpeakeasyMetadata({ data: "json, name=SystemInfo, form, name=SystemInfo;" })
  systemInfo: string;

  @SpeakeasyMetadata({ data: "json, name=VoucherCode, form, name=VoucherCode;" })
  voucherCode: string;
}
