import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VisibilityTypeEnum } from "./visibilitytypeenum";
export declare class DescribeImagesRequest extends SpeakeasyBase {
    arns?: string[];
    maxResults?: number;
    names?: string[];
    nextToken?: string;
    type?: VisibilityTypeEnum;
}
