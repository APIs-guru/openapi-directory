import { SpeakeasyBase } from "../../../internal/utils";
import { OutputResources } from "./outputresources";
import { PlatformEnum } from "./platformenum";
import { ImageState } from "./imagestate";
import { ImageTypeEnum } from "./imagetypeenum";
/**
 * An image summary.
**/
export declare class ImageSummary extends SpeakeasyBase {
    arn?: string;
    dateCreated?: string;
    name?: string;
    osVersion?: string;
    outputResources?: OutputResources;
    owner?: string;
    platform?: PlatformEnum;
    state?: ImageState;
    tags?: Map<string, string>;
    type?: ImageTypeEnum;
    version?: string;
}
