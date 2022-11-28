import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CaCertificateDescription } from "./cacertificatedescription";
import { RegistrationConfig } from "./registrationconfig";



// DescribeCaCertificateResponse
/** 
 * The output from the DescribeCACertificate operation.
**/
export class DescribeCaCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateDescription" })
  certificateDescription?: CaCertificateDescription;

  @SpeakeasyMetadata({ data: "json, name=registrationConfig" })
  registrationConfig?: RegistrationConfig;
}
