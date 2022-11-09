import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceResourceCost } from "./serviceresourcecost";
import { CostEstimationResourceCollectionFilter } from "./costestimationresourcecollectionfilter";
import { CostEstimationStatusEnum } from "./costestimationstatusenum";
import { CostEstimationTimeRange } from "./costestimationtimerange";


export class GetCostEstimationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Costs", elemType: shared.ServiceResourceCost })
  costs?: ServiceResourceCost[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: CostEstimationResourceCollectionFilter;

  @Metadata({ data: "json, name=Status" })
  status?: CostEstimationStatusEnum;

  @Metadata({ data: "json, name=TimeRange" })
  timeRange?: CostEstimationTimeRange;

  @Metadata({ data: "json, name=TotalCost" })
  totalCost?: number;
}
