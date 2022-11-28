import { SpeakeasyBase } from "../../../internal/utils";
import { CaCertificateDescription } from "./cacertificatedescription";
import { RegistrationConfig } from "./registrationconfig";
/**
 * The output from the DescribeCACertificate operation.
**/
export declare class DescribeCaCertificateResponse extends SpeakeasyBase {
    certificateDescription?: CaCertificateDescription;
    registrationConfig?: RegistrationConfig;
}
