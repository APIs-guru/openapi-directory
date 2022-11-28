import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateResourceIdentifier } from "./aggregateresourceidentifier";
export declare class ListAggregateDiscoveredResourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceIdentifiers?: AggregateResourceIdentifier[];
}
