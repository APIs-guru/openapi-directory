import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageTestsConfiguration } from "./imagetestsconfiguration";
import { PlatformEnum } from "./platformenum";
import { Schedule } from "./schedule";
import { PipelineStatusEnum } from "./pipelinestatusenum";


// ImagePipeline
/** 
 * Details of an image pipeline.
**/
export class ImagePipeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=containerRecipeArn" })
  containerRecipeArn?: string;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @Metadata({ data: "json, name=dateLastRun" })
  dateLastRun?: string;

  @Metadata({ data: "json, name=dateNextRun" })
  dateNextRun?: string;

  @Metadata({ data: "json, name=dateUpdated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=distributionConfigurationArn" })
  distributionConfigurationArn?: string;

  @Metadata({ data: "json, name=enhancedImageMetadataEnabled" })
  enhancedImageMetadataEnabled?: boolean;

  @Metadata({ data: "json, name=imageRecipeArn" })
  imageRecipeArn?: string;

  @Metadata({ data: "json, name=imageTestsConfiguration" })
  imageTestsConfiguration?: ImageTestsConfiguration;

  @Metadata({ data: "json, name=infrastructureConfigurationArn" })
  infrastructureConfigurationArn?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: PlatformEnum;

  @Metadata({ data: "json, name=schedule" })
  schedule?: Schedule;

  @Metadata({ data: "json, name=status" })
  status?: PipelineStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
