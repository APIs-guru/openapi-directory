import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
/**
 * An object that represents the outlier detection for a virtual node's listener.
**/
export declare class OutlierDetection extends SpeakeasyBase {
    baseEjectionDuration: Duration;
    interval: Duration;
    maxEjectionPercent: number;
    maxServerErrors: number;
}
