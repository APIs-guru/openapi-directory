import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerTypeEnum } from "./containertypeenum";
import { PlatformEnum } from "./platformenum";
/**
 * A summary of a container recipe
**/
export declare class ContainerRecipeSummary extends SpeakeasyBase {
    arn?: string;
    containerType?: ContainerTypeEnum;
    dateCreated?: string;
    name?: string;
    owner?: string;
    parentImage?: string;
    platform?: PlatformEnum;
    tags?: Map<string, string>;
}
