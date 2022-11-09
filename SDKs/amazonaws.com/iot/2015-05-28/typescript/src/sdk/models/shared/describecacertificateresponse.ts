import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CaCertificateDescription } from "./cacertificatedescription";
import { RegistrationConfig } from "./registrationconfig";


// DescribeCaCertificateResponse
/** 
 * The output from the DescribeCACertificate operation.
**/
export class DescribeCaCertificateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateDescription" })
  certificateDescription?: CaCertificateDescription;

  @Metadata({ data: "json, name=registrationConfig" })
  registrationConfig?: RegistrationConfig;
}
