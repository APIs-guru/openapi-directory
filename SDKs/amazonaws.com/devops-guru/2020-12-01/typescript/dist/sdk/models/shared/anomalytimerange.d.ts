import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly.
**/
export declare class AnomalyTimeRange extends SpeakeasyBase {
    endTime?: Date;
    startTime: Date;
}
