import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceCount } from "./resourcecount";



export class GetDiscoveredResourceCountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceCounts", elemType: ResourceCount })
  resourceCounts?: ResourceCount[];

  @SpeakeasyMetadata({ data: "json, name=totalDiscoveredResources" })
  totalDiscoveredResources?: number;
}
