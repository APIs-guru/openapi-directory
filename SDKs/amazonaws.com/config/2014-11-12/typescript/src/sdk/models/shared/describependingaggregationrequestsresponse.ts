import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PendingAggregationRequest } from "./pendingaggregationrequest";



export class DescribePendingAggregationRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PendingAggregationRequests", elemType: PendingAggregationRequest })
  pendingAggregationRequests?: PendingAggregationRequest[];
}
