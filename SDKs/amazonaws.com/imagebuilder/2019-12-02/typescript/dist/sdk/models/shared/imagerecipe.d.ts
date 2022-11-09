import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AdditionalInstanceConfiguration } from "./additionalinstanceconfiguration";
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";
import { ComponentConfiguration } from "./componentconfiguration";
import { PlatformEnum } from "./platformenum";
import { ImageTypeEnum } from "./imagetypeenum";
/**
 * An image recipe.
**/
export declare class ImageRecipe extends SpeakeasyBase {
    additionalInstanceConfiguration?: AdditionalInstanceConfiguration;
    arn?: string;
    blockDeviceMappings?: InstanceBlockDeviceMapping[];
    components?: ComponentConfiguration[];
    dateCreated?: string;
    description?: string;
    name?: string;
    owner?: string;
    parentImage?: string;
    platform?: PlatformEnum;
    tags?: Map<string, string>;
    type?: ImageTypeEnum;
    version?: string;
    workingDirectory?: string;
}
