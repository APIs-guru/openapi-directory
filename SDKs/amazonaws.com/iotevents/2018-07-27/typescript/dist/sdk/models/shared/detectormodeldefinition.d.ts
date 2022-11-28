import { SpeakeasyBase } from "../../../internal/utils";
import { State } from "./state";
/**
 * Information that defines how a detector operates.
**/
export declare class DetectorModelDefinition extends SpeakeasyBase {
    initialStateName: string;
    states: State[];
}
