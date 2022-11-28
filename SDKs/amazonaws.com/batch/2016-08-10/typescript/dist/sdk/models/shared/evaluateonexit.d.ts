import { SpeakeasyBase } from "../../../internal/utils";
import { RetryActionEnum } from "./retryactionenum";
/**
 * Specifies a set of conditions to be met, and an action to take (<code>RETRY</code> or <code>EXIT</code>) if all conditions are met.
**/
export declare class EvaluateOnExit extends SpeakeasyBase {
    action: RetryActionEnum;
    onExitCode?: string;
    onReason?: string;
    onStatusReason?: string;
}
