import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RemediationActionWithOrder } from "./remediationactionwithorder";


// PossibleRemediationAction
/** 
 * A list of remediation actions.
**/
export class PossibleRemediationAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IsDefaultAction" })
  isDefaultAction?: boolean;

  @Metadata({ data: "json, name=OrderedRemediationActions", elemType: shared.RemediationActionWithOrder })
  orderedRemediationActions: RemediationActionWithOrder[];
}
