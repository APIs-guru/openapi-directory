import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class ListMfaDeviceTagsResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    tags: Tag[];
}
