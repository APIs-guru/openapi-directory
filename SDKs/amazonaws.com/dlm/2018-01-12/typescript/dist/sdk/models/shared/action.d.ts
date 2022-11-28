import { SpeakeasyBase } from "../../../internal/utils";
import { CrossRegionCopyAction } from "./crossregioncopyaction";
/**
 * Specifies an action for an event-based policy.
**/
export declare class Action extends SpeakeasyBase {
    crossRegionCopy: CrossRegionCopyAction[];
    name: string;
}
