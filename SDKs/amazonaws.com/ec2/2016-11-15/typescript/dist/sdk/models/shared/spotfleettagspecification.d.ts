import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
/**
 * The tags for a Spot Fleet resource.
**/
export declare class SpotFleetTagSpecification extends SpeakeasyBase {
    resourceType?: ResourceTypeEnum;
    tags?: Tag[];
}
