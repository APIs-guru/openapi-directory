import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyInstance } from "./anomalyinstance";
import { Metric } from "./metric";
/**
 *  Details about an anomaly in a specific metric of application profile. The anomaly is detected using analysis of the metric data over a period of time.
**/
export declare class Anomaly extends SpeakeasyBase {
    instances: AnomalyInstance[];
    metric: Metric;
    reason: string;
}
