import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Specifies the tags to remove from a trail.
**/
export declare class RemoveTagsRequest extends SpeakeasyBase {
    resourceId: string;
    tagsList?: Tag[];
}
