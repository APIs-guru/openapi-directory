import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DealerDbModelsLicenseLicenseActivationTypeEnum {
    Edt = "EDT",
    EdtLite = "EDTLite"
}


export class DealerDbModelsLicense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DeactivatedDate" })
  deactivatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LicenseActivationType" })
  licenseActivationType?: DealerDbModelsLicenseLicenseActivationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LicenseID" })
  licenseId?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseVersion" })
  licenseVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=RefreshDate" })
  refreshDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=SystemInfo" })
  systemInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedLicenseVersion" })
  updatedLicenseVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=VoucherCode" })
  voucherCode?: string;
}
