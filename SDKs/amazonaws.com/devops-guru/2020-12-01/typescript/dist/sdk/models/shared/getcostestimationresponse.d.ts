import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceResourceCost } from "./serviceresourcecost";
import { CostEstimationResourceCollectionFilter } from "./costestimationresourcecollectionfilter";
import { CostEstimationStatusEnum } from "./costestimationstatusenum";
import { CostEstimationTimeRange } from "./costestimationtimerange";
export declare class GetCostEstimationResponse extends SpeakeasyBase {
    costs?: ServiceResourceCost[];
    nextToken?: string;
    resourceCollection?: CostEstimationResourceCollectionFilter;
    status?: CostEstimationStatusEnum;
    timeRange?: CostEstimationTimeRange;
    totalCost?: number;
}
