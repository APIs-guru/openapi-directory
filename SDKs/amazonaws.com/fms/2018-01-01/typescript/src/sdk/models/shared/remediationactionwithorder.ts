import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RemediationAction } from "./remediationaction";


// RemediationActionWithOrder
/** 
 * An ordered list of actions you can take to remediate a violation.
**/
export class RemediationActionWithOrder extends SpeakeasyBase {
  @Metadata({ data: "json, name=Order" })
  order?: number;

  @Metadata({ data: "json, name=RemediationAction" })
  remediationAction?: RemediationAction;
}
