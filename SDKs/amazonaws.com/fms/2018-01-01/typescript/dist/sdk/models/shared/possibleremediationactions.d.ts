import { SpeakeasyBase } from "../../../internal/utils";
import { PossibleRemediationAction } from "./possibleremediationaction";
/**
 * A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.
**/
export declare class PossibleRemediationActions extends SpeakeasyBase {
    actions?: PossibleRemediationAction[];
    description?: string;
}
