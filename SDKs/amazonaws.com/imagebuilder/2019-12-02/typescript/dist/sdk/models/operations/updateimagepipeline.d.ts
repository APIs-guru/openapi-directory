import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateImagePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Image tests configuration.
**/
export declare class UpdateImagePipelineRequestBodyImageTestsConfiguration extends SpeakeasyBase {
    imageTestsEnabled?: boolean;
    timeoutMinutes?: number;
}
/**
 * A schedule configures how often and when a pipeline will automatically create a new image.
**/
export declare class UpdateImagePipelineRequestBodySchedule extends SpeakeasyBase {
    pipelineExecutionStartCondition?: shared.PipelineExecutionStartConditionEnum;
    scheduleExpression?: string;
    timezone?: string;
}
export declare enum UpdateImagePipelineRequestBodyStatusEnum {
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
export declare class UpdateImagePipelineRequestBody extends SpeakeasyBase {
    clientToken: string;
    containerRecipeArn?: string;
    description?: string;
    distributionConfigurationArn?: string;
    enhancedImageMetadataEnabled?: boolean;
    imagePipelineArn: string;
    imageRecipeArn?: string;
    imageTestsConfiguration?: UpdateImagePipelineRequestBodyImageTestsConfiguration;
    infrastructureConfigurationArn: string;
    schedule?: UpdateImagePipelineRequestBodySchedule;
    status?: UpdateImagePipelineRequestBodyStatusEnum;
}
export declare class UpdateImagePipelineRequest extends SpeakeasyBase {
    headers: UpdateImagePipelineHeaders;
    request: UpdateImagePipelineRequestBody;
}
export declare class UpdateImagePipelineResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    idempotentParameterMismatchException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    updateImagePipelineResponse?: shared.UpdateImagePipelineResponse;
}
