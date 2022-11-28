import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Represents the output from the <code>AddTagsToResource</code>, <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code> operations.
**/
export declare class TagListMessage extends SpeakeasyBase {
    tagList?: Tag[];
}
