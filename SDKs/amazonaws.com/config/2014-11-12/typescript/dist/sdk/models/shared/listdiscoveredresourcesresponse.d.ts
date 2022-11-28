import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
/**
 * <p/>
**/
export declare class ListDiscoveredResourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceIdentifiers?: ResourceIdentifier[];
}
