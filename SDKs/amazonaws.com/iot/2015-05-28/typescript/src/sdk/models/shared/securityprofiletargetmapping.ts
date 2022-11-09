import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SecurityProfileIdentifier } from "./securityprofileidentifier";
import { SecurityProfileTarget } from "./securityprofiletarget";


// SecurityProfileTargetMapping
/** 
 * Information about a security profile and the target associated with it.
**/
export class SecurityProfileTargetMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=securityProfileIdentifier" })
  securityProfileIdentifier?: SecurityProfileIdentifier;

  @Metadata({ data: "json, name=target" })
  target?: SecurityProfileTarget;
}
