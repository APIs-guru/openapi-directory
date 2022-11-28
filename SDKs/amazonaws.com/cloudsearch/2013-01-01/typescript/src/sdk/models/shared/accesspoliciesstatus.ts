import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionStatus } from "./optionstatus";



// AccessPoliciesStatus
/** 
 * The configured access rules for the domain's document and search endpoints, and the current status of those rules.
**/
export class AccessPoliciesStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  options: string;

  @SpeakeasyMetadata()
  status: OptionStatus;
}
