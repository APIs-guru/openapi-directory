import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageTestsConfiguration } from "./imagetestsconfiguration";
import { PlatformEnum } from "./platformenum";
import { Schedule } from "./schedule";
import { PipelineStatusEnum } from "./pipelinestatusenum";



// ImagePipeline
/** 
 * Details of an image pipeline.
**/
export class ImagePipeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=containerRecipeArn" })
  containerRecipeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=dateLastRun" })
  dateLastRun?: string;

  @SpeakeasyMetadata({ data: "json, name=dateNextRun" })
  dateNextRun?: string;

  @SpeakeasyMetadata({ data: "json, name=dateUpdated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=distributionConfigurationArn" })
  distributionConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=enhancedImageMetadataEnabled" })
  enhancedImageMetadataEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=imageRecipeArn" })
  imageRecipeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=imageTestsConfiguration" })
  imageTestsConfiguration?: ImageTestsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=infrastructureConfigurationArn" })
  infrastructureConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: PlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: Schedule;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PipelineStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
