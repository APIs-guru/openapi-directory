import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformEnum } from "./platformenum";
import { ImageTypeEnum } from "./imagetypeenum";
/**
 * The defining characteristics of a specific version of an Image Builder image.
**/
export declare class ImageVersion extends SpeakeasyBase {
    arn?: string;
    dateCreated?: string;
    name?: string;
    osVersion?: string;
    owner?: string;
    platform?: PlatformEnum;
    type?: ImageTypeEnum;
    version?: string;
}
