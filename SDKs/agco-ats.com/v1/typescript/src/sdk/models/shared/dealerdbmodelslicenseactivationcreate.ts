import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnum {
    Edt = "EDT"
,    EdtLite = "EDTLite"
}


export class DealerDbModelsLicenseActivationCreate extends SpeakeasyBase {
  @Metadata({ data: "json, name=DealerCode, form, name=DealerCode;" })
  dealerCode: string;

  @Metadata({ data: "json, name=LicenseActivationType, form, name=LicenseActivationType;" })
  licenseActivationType?: DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnum;

  @Metadata({ data: "json, name=PostalCode, form, name=PostalCode;" })
  postalCode: string;

  @Metadata({ data: "json, name=SystemInfo, form, name=SystemInfo;" })
  systemInfo: string;

  @Metadata({ data: "json, name=VoucherCode, form, name=VoucherCode;" })
  voucherCode: string;
}
