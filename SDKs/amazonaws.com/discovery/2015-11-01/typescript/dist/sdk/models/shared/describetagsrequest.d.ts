import { SpeakeasyBase } from "../../../internal/utils";
import { TagFilter } from "./tagfilter";
export declare class DescribeTagsRequest extends SpeakeasyBase {
    filters?: TagFilter[];
    maxResults?: number;
    nextToken?: string;
}
