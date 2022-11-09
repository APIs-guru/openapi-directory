import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PendingAggregationRequest } from "./pendingaggregationrequest";


export class DescribePendingAggregationRequestsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PendingAggregationRequests", elemType: shared.PendingAggregationRequest })
  pendingAggregationRequests?: PendingAggregationRequest[];
}
