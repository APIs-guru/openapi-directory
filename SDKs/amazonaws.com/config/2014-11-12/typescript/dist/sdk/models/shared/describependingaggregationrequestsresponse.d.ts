import { SpeakeasyBase } from "../../../internal/utils";
import { PendingAggregationRequest } from "./pendingaggregationrequest";
export declare class DescribePendingAggregationRequestsResponse extends SpeakeasyBase {
    nextToken?: string;
    pendingAggregationRequests?: PendingAggregationRequest[];
}
