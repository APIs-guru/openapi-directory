import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecurityProfileIdentifier } from "./securityprofileidentifier";
import { SecurityProfileTarget } from "./securityprofiletarget";



// SecurityProfileTargetMapping
/** 
 * Information about a security profile and the target associated with it.
**/
export class SecurityProfileTargetMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=securityProfileIdentifier" })
  securityProfileIdentifier?: SecurityProfileIdentifier;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: SecurityProfileTarget;
}
