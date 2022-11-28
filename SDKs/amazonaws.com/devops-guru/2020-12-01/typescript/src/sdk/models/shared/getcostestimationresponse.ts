import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceResourceCost } from "./serviceresourcecost";
import { CostEstimationResourceCollectionFilter } from "./costestimationresourcecollectionfilter";
import { CostEstimationStatusEnum } from "./costestimationstatusenum";
import { CostEstimationTimeRange } from "./costestimationtimerange";



export class GetCostEstimationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Costs", elemType: ServiceResourceCost })
  costs?: ServiceResourceCost[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: CostEstimationResourceCollectionFilter;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CostEstimationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TimeRange" })
  timeRange?: CostEstimationTimeRange;

  @SpeakeasyMetadata({ data: "json, name=TotalCost" })
  totalCost?: number;
}
