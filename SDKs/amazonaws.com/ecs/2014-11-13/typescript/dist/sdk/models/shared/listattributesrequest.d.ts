import { SpeakeasyBase } from "../../../internal/utils";
import { TargetTypeEnum } from "./targettypeenum";
export declare class ListAttributesRequest extends SpeakeasyBase {
    attributeName?: string;
    attributeValue?: string;
    cluster?: string;
    maxResults?: number;
    nextToken?: string;
    targetType: TargetTypeEnum;
}
