import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Timer } from "./timer";
import { Variable } from "./variable";
/**
 * Information about the current state of the detector instance.
**/
export declare class DetectorState extends SpeakeasyBase {
    stateName: string;
    timers: Timer[];
    variables: Variable[];
}
