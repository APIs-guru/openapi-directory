import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=containerRecipe" })
  containerRecipe?: ContainerRecipe;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=distributionConfiguration" })
  distributionConfiguration?: DistributionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=enhancedImageMetadataEnabled" })
  enhancedImageMetadataEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=imageRecipe" })
  imageRecipe?: ImageRecipe;

  @SpeakeasyMetadata({ data: "json, name=imageTestsConfiguration" })
  imageTestsConfiguration?: ImageTestsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=infrastructureConfiguration" })
  infrastructureConfiguration?: InfrastructureConfiguration;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=outputResources" })
  outputResources?: OutputResources;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: PlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=sourcePipelineArn" })
  sourcePipelineArn?: string;

  @SpeakeasyMetadata({ data: "json, name=sourcePipelineName" })
  sourcePipelineName?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ImageState;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ImageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
