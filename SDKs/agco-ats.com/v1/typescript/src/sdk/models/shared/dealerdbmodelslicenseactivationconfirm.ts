import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DealerDbModelsLicenseActivationConfirm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseVersion, form, name=LicenseVersion;" })
  licenseVersion: string;
}
