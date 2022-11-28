import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";



// AccessPoliciesStatus
/** 
 * A <code>PolicyDocument</code> that specifies access policies for the search domain's services, and the current status of those policies.
**/
export class AccessPoliciesStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  options: string;

  @SpeakeasyMetadata()
  status: OptionStatus;
}
