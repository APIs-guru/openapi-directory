import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Filters the resource count based on account ID, region, and resource type.
**/
export declare class ResourceCountFilters extends SpeakeasyBase {
    accountId?: string;
    region?: string;
    resourceType?: ResourceTypeEnum;
}
