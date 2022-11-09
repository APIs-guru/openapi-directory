import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InsightTimeRange } from "./insighttimerange";
import { PredictionTimeRange } from "./predictiontimerange";
import { ResourceCollection } from "./resourcecollection";
import { ServiceCollection } from "./servicecollection";
import { InsightSeverityEnum } from "./insightseverityenum";
import { InsightStatusEnum } from "./insightstatusenum";
/**
 * Details about a proactive insight. This object is returned by <code>DescribeInsight.</code>
**/
export declare class ProactiveInsightSummary extends SpeakeasyBase {
    id?: string;
    insightTimeRange?: InsightTimeRange;
    name?: string;
    predictionTimeRange?: PredictionTimeRange;
    resourceCollection?: ResourceCollection;
    serviceCollection?: ServiceCollection;
    severity?: InsightSeverityEnum;
    status?: InsightStatusEnum;
}
