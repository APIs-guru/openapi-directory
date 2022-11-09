import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageTestsConfiguration } from "./imagetestsconfiguration";
import { PlatformEnum } from "./platformenum";
import { Schedule } from "./schedule";
import { PipelineStatusEnum } from "./pipelinestatusenum";
/**
 * Details of an image pipeline.
**/
export declare class ImagePipeline extends SpeakeasyBase {
    arn?: string;
    containerRecipeArn?: string;
    dateCreated?: string;
    dateLastRun?: string;
    dateNextRun?: string;
    dateUpdated?: string;
    description?: string;
    distributionConfigurationArn?: string;
    enhancedImageMetadataEnabled?: boolean;
    imageRecipeArn?: string;
    imageTestsConfiguration?: ImageTestsConfiguration;
    infrastructureConfigurationArn?: string;
    name?: string;
    platform?: PlatformEnum;
    schedule?: Schedule;
    status?: PipelineStatusEnum;
    tags?: Map<string, string>;
}
