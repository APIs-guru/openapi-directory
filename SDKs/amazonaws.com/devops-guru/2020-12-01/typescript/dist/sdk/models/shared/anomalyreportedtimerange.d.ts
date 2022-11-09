import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 *  A time range that specifies when DevOps Guru opens and then closes an anomaly. This is different from <code>AnomalyTimeRange</code>, which specifies the time range when DevOps Guru actually observes the anomalous behavior.
**/
export declare class AnomalyReportedTimeRange extends SpeakeasyBase {
    closeTime?: Date;
    openTime: Date;
}
