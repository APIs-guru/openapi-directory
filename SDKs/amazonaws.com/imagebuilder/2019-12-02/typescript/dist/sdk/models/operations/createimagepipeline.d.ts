import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateImagePipelineHeaders extends SpeakeasyBase {
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
export declare class CreateImagePipelineRequestBodyImageTestsConfiguration extends SpeakeasyBase {
    imageTestsEnabled?: boolean;
    timeoutMinutes?: number;
}
/**
 * A schedule configures how often and when a pipeline will automatically create a new image.
**/
export declare class CreateImagePipelineRequestBodySchedule extends SpeakeasyBase {
    pipelineExecutionStartCondition?: shared.PipelineExecutionStartConditionEnum;
    scheduleExpression?: string;
    timezone?: string;
}
export declare enum CreateImagePipelineRequestBodyStatusEnum {
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
export declare class CreateImagePipelineRequestBody extends SpeakeasyBase {
    clientToken: string;
    containerRecipeArn?: string;
    description?: string;
    distributionConfigurationArn?: string;
    enhancedImageMetadataEnabled?: boolean;
    imageRecipeArn?: string;
    imageTestsConfiguration?: CreateImagePipelineRequestBodyImageTestsConfiguration;
    infrastructureConfigurationArn: string;
    name: string;
    schedule?: CreateImagePipelineRequestBodySchedule;
    status?: CreateImagePipelineRequestBodyStatusEnum;
    tags?: Map<string, string>;
}
export declare class CreateImagePipelineRequest extends SpeakeasyBase {
    headers: CreateImagePipelineHeaders;
    request: CreateImagePipelineRequestBody;
}
export declare class CreateImagePipelineResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    createImagePipelineResponse?: shared.CreateImagePipelineResponse;
    forbiddenException?: any;
    idempotentParameterMismatchException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    serviceException?: any;
    serviceQuotaExceededException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
