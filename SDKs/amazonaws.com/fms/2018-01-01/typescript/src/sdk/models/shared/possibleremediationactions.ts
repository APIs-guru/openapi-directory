import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PossibleRemediationAction } from "./possibleremediationaction";



// PossibleRemediationActions
/** 
 * A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.
**/
export class PossibleRemediationActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Actions", elemType: PossibleRemediationAction })
  actions?: PossibleRemediationAction[];

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;
}
