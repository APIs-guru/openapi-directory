import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionTarget } from "./actiontarget";
/**
 * Provides a summary of an action.
**/
export declare class ActionSummary extends SpeakeasyBase {
    description?: string;
    id?: string;
    tags?: Map<string, string>;
    targets?: Map<string, ActionTarget>;
}
