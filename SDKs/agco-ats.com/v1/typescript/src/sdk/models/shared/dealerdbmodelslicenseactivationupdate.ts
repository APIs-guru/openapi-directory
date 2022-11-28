import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DealerDbModelsLicenseActivationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseVersion, form, name=LicenseVersion;" })
  licenseVersion: string;

  @SpeakeasyMetadata({ data: "json, name=SystemInfo, form, name=SystemInfo;" })
  systemInfo?: string;
}
