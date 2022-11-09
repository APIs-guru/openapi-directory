import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DealerDbModelsLicenseLicenseActivationTypeEnum {
    Edt = "EDT"
,    EdtLite = "EDTLite"
}


export class DealerDbModelsLicense extends SpeakeasyBase {
  @Metadata({ data: "json, name=Active" })
  active?: boolean;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=DeactivatedDate" })
  deactivatedDate?: Date;

  @Metadata({ data: "json, name=LicenseActivationType" })
  licenseActivationType?: DealerDbModelsLicenseLicenseActivationTypeEnum;

  @Metadata({ data: "json, name=LicenseID" })
  licenseId?: string;

  @Metadata({ data: "json, name=LicenseVersion" })
  licenseVersion?: string;

  @Metadata({ data: "json, name=RefreshDate" })
  refreshDate?: Date;

  @Metadata({ data: "json, name=SystemInfo" })
  systemInfo?: string;

  @Metadata({ data: "json, name=UpdatedLicenseVersion" })
  updatedLicenseVersion?: string;

  @Metadata({ data: "json, name=VoucherCode" })
  voucherCode?: string;
}
