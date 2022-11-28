import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiscoveredResource } from "./discoveredresource";



export class ListDiscoveredResourcesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DiscoveredResourceList", elemType: DiscoveredResource })
  discoveredResourceList?: DiscoveredResource[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
