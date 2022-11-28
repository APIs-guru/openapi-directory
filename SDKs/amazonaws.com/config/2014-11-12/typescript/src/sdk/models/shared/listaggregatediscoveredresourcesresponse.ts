import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateResourceIdentifier } from "./aggregateresourceidentifier";



export class ListAggregateDiscoveredResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceIdentifiers", elemType: AggregateResourceIdentifier })
  resourceIdentifiers?: AggregateResourceIdentifier[];
}
