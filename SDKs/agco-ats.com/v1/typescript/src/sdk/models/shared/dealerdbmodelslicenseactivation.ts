import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DealerDbModelsLicenseActivation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseData" })
  licenseData?: string;
}
