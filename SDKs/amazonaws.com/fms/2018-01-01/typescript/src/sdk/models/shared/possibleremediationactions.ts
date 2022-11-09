import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PossibleRemediationAction } from "./possibleremediationaction";


// PossibleRemediationActions
/** 
 * A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.
**/
export class PossibleRemediationActions extends SpeakeasyBase {
  @Metadata({ data: "json, name=Actions", elemType: shared.PossibleRemediationAction })
  actions?: PossibleRemediationAction[];

  @Metadata({ data: "json, name=Description" })
  description?: string;
}
