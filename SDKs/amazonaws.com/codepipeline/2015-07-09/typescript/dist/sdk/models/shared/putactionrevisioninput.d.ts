import { SpeakeasyBase } from "../../../internal/utils";
import { ActionRevision } from "./actionrevision";
/**
 * Represents the input of a <code>PutActionRevision</code> action.
**/
export declare class PutActionRevisionInput extends SpeakeasyBase {
    actionName: string;
    actionRevision: ActionRevision;
    pipelineName: string;
    stageName: string;
}
