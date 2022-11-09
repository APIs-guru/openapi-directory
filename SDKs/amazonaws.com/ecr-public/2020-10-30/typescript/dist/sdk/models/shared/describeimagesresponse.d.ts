import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageDetail } from "./imagedetail";
export declare class DescribeImagesResponse extends SpeakeasyBase {
    imageDetails?: ImageDetail[];
    nextToken?: string;
}
