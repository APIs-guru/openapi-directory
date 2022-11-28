import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * <p/>
**/
export declare class DescribeTagsResponse extends SpeakeasyBase {
    marker?: string;
    nextMarker?: string;
    tags: Tag[];
}
