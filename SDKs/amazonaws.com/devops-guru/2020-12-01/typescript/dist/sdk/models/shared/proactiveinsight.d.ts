import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InsightTimeRange } from "./insighttimerange";
import { PredictionTimeRange } from "./predictiontimerange";
import { ResourceCollection } from "./resourcecollection";
import { InsightSeverityEnum } from "./insightseverityenum";
import { InsightStatusEnum } from "./insightstatusenum";
/**
 * Details about a proactive insight. This object is returned by <code>ListInsights</code>.
**/
export declare class ProactiveInsight extends SpeakeasyBase {
    id?: string;
    insightTimeRange?: InsightTimeRange;
    name?: string;
    predictionTimeRange?: PredictionTimeRange;
    resourceCollection?: ResourceCollection;
    severity?: InsightSeverityEnum;
    ssmOpsItemId?: string;
    status?: InsightStatusEnum;
}
