import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
/**
 * Specifies the <code>actions</code> to be performed when the <code>condition</code> evaluates to TRUE.
**/
export declare class Event extends SpeakeasyBase {
    actions?: Action[];
    condition?: string;
    eventName: string;
}
