import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PlatformEnum } from "./platformenum";
/**
 * A summary of an image recipe.
**/
export declare class ImageRecipeSummary extends SpeakeasyBase {
    arn?: string;
    dateCreated?: string;
    name?: string;
    owner?: string;
    parentImage?: string;
    platform?: PlatformEnum;
    tags?: Map<string, string>;
}
