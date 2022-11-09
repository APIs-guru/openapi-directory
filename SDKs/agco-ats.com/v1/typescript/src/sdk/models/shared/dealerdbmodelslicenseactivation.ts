import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DealerDbModelsLicenseActivation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=LicenseData" })
  licenseData?: string;
}
