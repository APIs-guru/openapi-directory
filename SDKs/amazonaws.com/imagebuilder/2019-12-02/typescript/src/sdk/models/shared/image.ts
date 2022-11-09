import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerRecipe } from "./containerrecipe";
import { DistributionConfiguration } from "./distributionconfiguration";
import { ImageRecipe } from "./imagerecipe";
import { ImageTestsConfiguration } from "./imagetestsconfiguration";
import { InfrastructureConfiguration } from "./infrastructureconfiguration";
import { OutputResources } from "./outputresources";
import { PlatformEnum } from "./platformenum";
import { ImageState } from "./imagestate";
import { ImageTypeEnum } from "./imagetypeenum";


// Image
/** 
 * An Image Builder image. You must specify exactly one recipe for the image – either a container recipe (<code>containerRecipe</code>), which creates a container image, or an image recipe (<code>imageRecipe</code>), which creates an AMI.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=containerRecipe" })
  containerRecipe?: ContainerRecipe;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @Metadata({ data: "json, name=distributionConfiguration" })
  distributionConfiguration?: DistributionConfiguration;

  @Metadata({ data: "json, name=enhancedImageMetadataEnabled" })
  enhancedImageMetadataEnabled?: boolean;

  @Metadata({ data: "json, name=imageRecipe" })
  imageRecipe?: ImageRecipe;

  @Metadata({ data: "json, name=imageTestsConfiguration" })
  imageTestsConfiguration?: ImageTestsConfiguration;

  @Metadata({ data: "json, name=infrastructureConfiguration" })
  infrastructureConfiguration?: InfrastructureConfiguration;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @Metadata({ data: "json, name=outputResources" })
  outputResources?: OutputResources;

  @Metadata({ data: "json, name=platform" })
  platform?: PlatformEnum;

  @Metadata({ data: "json, name=sourcePipelineArn" })
  sourcePipelineArn?: string;

  @Metadata({ data: "json, name=sourcePipelineName" })
  sourcePipelineName?: string;

  @Metadata({ data: "json, name=state" })
  state?: ImageState;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: ImageTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
