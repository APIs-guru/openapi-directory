import { SpeakeasyBase } from "../../../internal/utils";
import { DiscoveredResource } from "./discoveredresource";
export declare class ListDiscoveredResourcesResult extends SpeakeasyBase {
    discoveredResourceList?: DiscoveredResource[];
    nextToken?: string;
}
