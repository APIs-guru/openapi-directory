import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DiscoveredResource } from "./discoveredresource";


export class ListDiscoveredResourcesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DiscoveredResourceList", elemType: shared.DiscoveredResource })
  discoveredResourceList?: DiscoveredResource[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
