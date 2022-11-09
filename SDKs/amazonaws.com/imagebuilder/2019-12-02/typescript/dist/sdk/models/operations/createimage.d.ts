import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateImageHeaders extends SpeakeasyBase {
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
export declare class CreateImageRequestBodyImageTestsConfiguration extends SpeakeasyBase {
    imageTestsEnabled?: boolean;
    timeoutMinutes?: number;
}
export declare class CreateImageRequestBody extends SpeakeasyBase {
    clientToken: string;
    containerRecipeArn?: string;
    distributionConfigurationArn?: string;
    enhancedImageMetadataEnabled?: boolean;
    imageRecipeArn?: string;
    imageTestsConfiguration?: CreateImageRequestBodyImageTestsConfiguration;
    infrastructureConfigurationArn: string;
    tags?: Map<string, string>;
}
export declare class CreateImageRequest extends SpeakeasyBase {
    headers: CreateImageHeaders;
    request: CreateImageRequestBody;
}
export declare class CreateImageResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    createImageResponse?: shared.CreateImageResponse;
    forbiddenException?: any;
    idempotentParameterMismatchException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    serviceException?: any;
    serviceQuotaExceededException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
