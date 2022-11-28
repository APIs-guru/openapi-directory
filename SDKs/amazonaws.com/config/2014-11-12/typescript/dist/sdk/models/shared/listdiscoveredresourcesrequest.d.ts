import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * <p/>
**/
export declare class ListDiscoveredResourcesRequest extends SpeakeasyBase {
    includeDeletedResources?: boolean;
    limit?: number;
    nextToken?: string;
    resourceIds?: string[];
    resourceName?: string;
    resourceType: ResourceTypeEnum;
}
