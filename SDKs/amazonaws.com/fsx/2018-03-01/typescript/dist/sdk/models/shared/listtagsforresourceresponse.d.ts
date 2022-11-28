import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The response object for <code>ListTagsForResource</code> operation.
**/
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    nextToken?: string;
    tags?: Tag[];
}
