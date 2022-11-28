import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemediationAction } from "./remediationaction";



// RemediationActionWithOrder
/** 
 * An ordered list of actions you can take to remediate a violation.
**/
export class RemediationActionWithOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=RemediationAction" })
  remediationAction?: RemediationAction;
}
