import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyInformation } from "./policyinformation";
import { ExtendedKeyUsage } from "./extendedkeyusage";
import { KeyUsage } from "./keyusage";
import { GeneralName } from "./generalname";
/**
 * Contains X.509 extension information for a certificate.
**/
export declare class Extensions extends SpeakeasyBase {
    certificatePolicies?: PolicyInformation[];
    extendedKeyUsage?: ExtendedKeyUsage[];
    keyUsage?: KeyUsage;
    subjectAlternativeNames?: GeneralName[];
}
