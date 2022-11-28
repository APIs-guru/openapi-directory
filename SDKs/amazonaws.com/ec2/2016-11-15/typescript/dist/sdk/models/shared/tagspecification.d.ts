import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
/**
 * The tags to apply to a resource when the resource is being created.
**/
export declare class TagSpecification extends SpeakeasyBase {
    resourceType?: ResourceTypeEnum;
    tags?: Tag[];
}
