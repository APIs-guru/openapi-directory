import { SpeakeasyBase } from "../../../internal/utils";
import { ImageTagDetail } from "./imagetagdetail";
export declare class DescribeImageTagsResponse extends SpeakeasyBase {
    imageTagDetails?: ImageTagDetail[];
    nextToken?: string;
}
