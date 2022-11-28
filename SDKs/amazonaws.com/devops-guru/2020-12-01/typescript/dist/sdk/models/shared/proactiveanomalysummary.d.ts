import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyReportedTimeRange } from "./anomalyreportedtimerange";
import { AnomalyTimeRange } from "./anomalytimerange";
import { PredictionTimeRange } from "./predictiontimerange";
import { ResourceCollection } from "./resourcecollection";
import { AnomalySeverityEnum } from "./anomalyseverityenum";
import { AnomalySourceDetails } from "./anomalysourcedetails";
import { AnomalyStatusEnum } from "./anomalystatusenum";
/**
 * Details about a proactive anomaly. This object is returned by <code>DescribeAnomaly.</code>
**/
export declare class ProactiveAnomalySummary extends SpeakeasyBase {
    anomalyReportedTimeRange?: AnomalyReportedTimeRange;
    anomalyTimeRange?: AnomalyTimeRange;
    associatedInsightId?: string;
    id?: string;
    limit?: number;
    predictionTimeRange?: PredictionTimeRange;
    resourceCollection?: ResourceCollection;
    severity?: AnomalySeverityEnum;
    sourceDetails?: AnomalySourceDetails;
    status?: AnomalyStatusEnum;
    updateTime?: Date;
}
