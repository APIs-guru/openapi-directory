import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
export declare class ListTagsResponse extends SpeakeasyBase {
    nextToken?: string;
    tagList: Tag[];
}
