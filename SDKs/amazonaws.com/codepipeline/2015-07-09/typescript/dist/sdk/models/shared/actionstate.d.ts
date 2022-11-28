import { SpeakeasyBase } from "../../../internal/utils";
import { ActionRevision } from "./actionrevision";
import { ActionExecution } from "./actionexecution";
/**
 * Represents information about the state of an action.
**/
export declare class ActionState extends SpeakeasyBase {
    actionName?: string;
    currentRevision?: ActionRevision;
    entityUrl?: string;
    latestExecution?: ActionExecution;
    revisionUrl?: string;
}
