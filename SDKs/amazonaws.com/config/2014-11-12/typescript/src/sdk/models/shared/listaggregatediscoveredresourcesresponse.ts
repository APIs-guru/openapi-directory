import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AggregateResourceIdentifier } from "./aggregateresourceidentifier";


export class ListAggregateDiscoveredResourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceIdentifiers", elemType: shared.AggregateResourceIdentifier })
  resourceIdentifiers?: AggregateResourceIdentifier[];
}
