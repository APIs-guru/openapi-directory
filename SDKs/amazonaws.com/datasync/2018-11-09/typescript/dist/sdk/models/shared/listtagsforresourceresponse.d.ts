import { SpeakeasyBase } from "../../../internal/utils";
import { TagListEntry } from "./taglistentry";
/**
 * ListTagsForResourceResponse
**/
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    nextToken?: string;
    tags?: TagListEntry[];
}
