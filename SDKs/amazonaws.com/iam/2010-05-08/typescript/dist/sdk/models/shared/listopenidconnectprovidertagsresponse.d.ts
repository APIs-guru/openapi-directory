import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class ListOpenIdConnectProviderTagsResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    tags: Tag[];
}
