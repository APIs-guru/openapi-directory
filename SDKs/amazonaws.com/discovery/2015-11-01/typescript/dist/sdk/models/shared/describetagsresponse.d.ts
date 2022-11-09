import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationTag } from "./configurationtag";
export declare class DescribeTagsResponse extends SpeakeasyBase {
    nextToken?: string;
    tags?: ConfigurationTag[];
}
