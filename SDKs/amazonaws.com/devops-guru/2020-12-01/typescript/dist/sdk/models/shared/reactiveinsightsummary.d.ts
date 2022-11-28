import { SpeakeasyBase } from "../../../internal/utils";
import { InsightTimeRange } from "./insighttimerange";
import { ResourceCollection } from "./resourcecollection";
import { ServiceCollection } from "./servicecollection";
import { InsightSeverityEnum } from "./insightseverityenum";
import { InsightStatusEnum } from "./insightstatusenum";
/**
 *  Information about a reactive insight. This object is returned by <code>DescribeInsight.</code>
**/
export declare class ReactiveInsightSummary extends SpeakeasyBase {
    id?: string;
    insightTimeRange?: InsightTimeRange;
    name?: string;
    resourceCollection?: ResourceCollection;
    serviceCollection?: ServiceCollection;
    severity?: InsightSeverityEnum;
    status?: InsightStatusEnum;
}
