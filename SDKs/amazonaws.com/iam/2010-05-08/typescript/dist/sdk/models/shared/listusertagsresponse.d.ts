import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class ListUserTagsResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    tags: Tag[];
}
