import { SpeakeasyBase } from "../../../internal/utils";
import { TagFilterTypeEnum } from "./tagfiltertypeenum";
/**
 * Information about an on-premises instance tag filter.
**/
export declare class TagFilter extends SpeakeasyBase {
    key?: string;
    type?: TagFilterTypeEnum;
    value?: string;
}
