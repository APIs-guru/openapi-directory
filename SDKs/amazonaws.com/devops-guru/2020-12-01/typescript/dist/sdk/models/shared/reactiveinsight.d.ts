import { SpeakeasyBase } from "../../../internal/utils";
import { InsightTimeRange } from "./insighttimerange";
import { ResourceCollection } from "./resourcecollection";
import { InsightSeverityEnum } from "./insightseverityenum";
import { InsightStatusEnum } from "./insightstatusenum";
/**
 *  Information about a reactive insight. This object is returned by <code>ListInsights</code>.
**/
export declare class ReactiveInsight extends SpeakeasyBase {
    id?: string;
    insightTimeRange?: InsightTimeRange;
    name?: string;
    resourceCollection?: ResourceCollection;
    severity?: InsightSeverityEnum;
    ssmOpsItemId?: string;
    status?: InsightStatusEnum;
}
