import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerRecipe } from "./containerrecipe";
import { DistributionConfiguration } from "./distributionconfiguration";
import { ImageRecipe } from "./imagerecipe";
import { ImageTestsConfiguration } from "./imagetestsconfiguration";
import { InfrastructureConfiguration } from "./infrastructureconfiguration";
import { OutputResources } from "./outputresources";
import { PlatformEnum } from "./platformenum";
import { ImageState } from "./imagestate";
import { ImageTypeEnum } from "./imagetypeenum";
/**
 * An Image Builder image. You must specify exactly one recipe for the image – either a container recipe (<code>containerRecipe</code>), which creates a container image, or an image recipe (<code>imageRecipe</code>), which creates an AMI.
**/
export declare class Image extends SpeakeasyBase {
    arn?: string;
    containerRecipe?: ContainerRecipe;
    dateCreated?: string;
    distributionConfiguration?: DistributionConfiguration;
    enhancedImageMetadataEnabled?: boolean;
    imageRecipe?: ImageRecipe;
    imageTestsConfiguration?: ImageTestsConfiguration;
    infrastructureConfiguration?: InfrastructureConfiguration;
    name?: string;
    osVersion?: string;
    outputResources?: OutputResources;
    platform?: PlatformEnum;
    sourcePipelineArn?: string;
    sourcePipelineName?: string;
    state?: ImageState;
    tags?: Map<string, string>;
    type?: ImageTypeEnum;
    version?: string;
}
