import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceCount } from "./resourcecount";


export class GetDiscoveredResourceCountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resourceCounts", elemType: shared.ResourceCount })
  resourceCounts?: ResourceCount[];

  @Metadata({ data: "json, name=totalDiscoveredResources" })
  totalDiscoveredResources?: number;
}
