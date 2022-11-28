import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemediationActionWithOrder } from "./remediationactionwithorder";



// PossibleRemediationAction
/** 
 * A list of remediation actions.
**/
export class PossibleRemediationAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=IsDefaultAction" })
  isDefaultAction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OrderedRemediationActions", elemType: RemediationActionWithOrder })
  orderedRemediationActions: RemediationActionWithOrder[];
}
