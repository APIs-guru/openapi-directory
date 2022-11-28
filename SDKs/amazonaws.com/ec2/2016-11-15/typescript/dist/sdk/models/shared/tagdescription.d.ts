import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Describes a tag.
**/
export declare class TagDescription extends SpeakeasyBase {
    key?: string;
    resourceId?: string;
    resourceType?: ResourceTypeEnum;
    value?: string;
}
