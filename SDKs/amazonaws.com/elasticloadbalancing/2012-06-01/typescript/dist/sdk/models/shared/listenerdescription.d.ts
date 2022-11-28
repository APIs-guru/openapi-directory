import { SpeakeasyBase } from "../../../internal/utils";
import { Listener } from "./listener";
/**
 * The policies enabled for a listener.
**/
export declare class ListenerDescription extends SpeakeasyBase {
    listener?: Listener;
    policyNames?: string[];
}
