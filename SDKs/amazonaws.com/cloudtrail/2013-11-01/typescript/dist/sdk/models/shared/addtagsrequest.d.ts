import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Specifies the tags to add to a trail.
**/
export declare class AddTagsRequest extends SpeakeasyBase {
    resourceId: string;
    tagsList?: Tag[];
}
