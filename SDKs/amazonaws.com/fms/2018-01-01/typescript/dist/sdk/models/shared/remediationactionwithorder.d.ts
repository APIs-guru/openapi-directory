import { SpeakeasyBase } from "../../../internal/utils";
import { RemediationAction } from "./remediationaction";
/**
 * An ordered list of actions you can take to remediate a violation.
**/
export declare class RemediationActionWithOrder extends SpeakeasyBase {
    order?: number;
    remediationAction?: RemediationAction;
}
