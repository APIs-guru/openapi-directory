import { SpeakeasyBase } from "../../../internal/utils";
import { TagRef } from "./tagref";
/**
 * <zonbook></zonbook><xhtml></xhtml>
**/
export declare class ListTagsForResourceOutput extends SpeakeasyBase {
    nextToken?: string;
    tags: TagRef[];
}
