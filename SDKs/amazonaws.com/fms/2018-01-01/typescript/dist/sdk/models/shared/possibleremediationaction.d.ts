import { SpeakeasyBase } from "../../../internal/utils";
import { RemediationActionWithOrder } from "./remediationactionwithorder";
/**
 * A list of remediation actions.
**/
export declare class PossibleRemediationAction extends SpeakeasyBase {
    description?: string;
    isDefaultAction?: boolean;
    orderedRemediationActions: RemediationActionWithOrder[];
}
