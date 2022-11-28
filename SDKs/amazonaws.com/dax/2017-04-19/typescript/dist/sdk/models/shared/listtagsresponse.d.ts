import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class ListTagsResponse extends SpeakeasyBase {
    nextToken?: string;
    tags?: Tag[];
}
