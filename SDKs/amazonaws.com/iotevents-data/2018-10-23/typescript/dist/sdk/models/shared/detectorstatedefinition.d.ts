import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TimerDefinition } from "./timerdefinition";
import { VariableDefinition } from "./variabledefinition";
/**
 * The new state, variable values, and timer settings of the detector (instance).
**/
export declare class DetectorStateDefinition extends SpeakeasyBase {
    stateName: string;
    timers: TimerDefinition[];
    variables: VariableDefinition[];
}
