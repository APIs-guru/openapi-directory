import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyReportedTimeRange } from "./anomalyreportedtimerange";
import { AnomalyTimeRange } from "./anomalytimerange";
import { ResourceCollection } from "./resourcecollection";
import { AnomalySeverityEnum } from "./anomalyseverityenum";
import { AnomalySourceDetails } from "./anomalysourcedetails";
import { AnomalyStatusEnum } from "./anomalystatusenum";
/**
 * Details about a reactive anomaly. This object is returned by <code>DescribeAnomaly.</code>
**/
export declare class ReactiveAnomalySummary extends SpeakeasyBase {
    anomalyReportedTimeRange?: AnomalyReportedTimeRange;
    anomalyTimeRange?: AnomalyTimeRange;
    associatedInsightId?: string;
    id?: string;
    resourceCollection?: ResourceCollection;
    severity?: AnomalySeverityEnum;
    sourceDetails?: AnomalySourceDetails;
    status?: AnomalyStatusEnum;
}
