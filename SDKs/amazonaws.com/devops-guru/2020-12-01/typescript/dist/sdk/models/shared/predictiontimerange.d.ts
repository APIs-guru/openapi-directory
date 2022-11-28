import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
**/
export declare class PredictionTimeRange extends SpeakeasyBase {
    endTime?: Date;
    startTime: Date;
}
