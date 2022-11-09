import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DealerDbModelsLicenseActivationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseVersion, form, name=LicenseVersion;" })
  licenseVersion: string;

  @Metadata({ data: "json, name=SystemInfo, form, name=SystemInfo;" })
  systemInfo?: string;
}
