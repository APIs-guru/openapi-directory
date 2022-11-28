import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityProfileIdentifier } from "./securityprofileidentifier";
import { SecurityProfileTarget } from "./securityprofiletarget";
/**
 * Information about a security profile and the target associated with it.
**/
export declare class SecurityProfileTargetMapping extends SpeakeasyBase {
    securityProfileIdentifier?: SecurityProfileIdentifier;
    target?: SecurityProfileTarget;
}
