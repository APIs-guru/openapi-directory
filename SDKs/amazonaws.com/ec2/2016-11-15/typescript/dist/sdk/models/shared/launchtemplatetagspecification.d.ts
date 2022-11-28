import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
/**
 * The tag specification for the launch template.
**/
export declare class LaunchTemplateTagSpecification extends SpeakeasyBase {
    resourceType?: ResourceTypeEnum;
    tags?: Tag[];
}
