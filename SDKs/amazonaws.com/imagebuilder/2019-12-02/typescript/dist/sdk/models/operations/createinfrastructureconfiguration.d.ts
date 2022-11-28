import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateInfrastructureConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Logging configuration defines where Image Builder uploads your logs.
**/
export declare class CreateInfrastructureConfigurationRequestBodyLogging extends SpeakeasyBase {
    s3Logs?: shared.S3Logs;
}
export declare class CreateInfrastructureConfigurationRequestBody extends SpeakeasyBase {
    clientToken: string;
    description?: string;
    instanceProfileName: string;
    instanceTypes?: string[];
    keyPair?: string;
    logging?: CreateInfrastructureConfigurationRequestBodyLogging;
    name: string;
    resourceTags?: Map<string, string>;
    securityGroupIds?: string[];
    snsTopicArn?: string;
    subnetId?: string;
    tags?: Map<string, string>;
    terminateInstanceOnFailure?: boolean;
}
export declare class CreateInfrastructureConfigurationRequest extends SpeakeasyBase {
    headers: CreateInfrastructureConfigurationHeaders;
    request: CreateInfrastructureConfigurationRequestBody;
}
export declare class CreateInfrastructureConfigurationResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    createInfrastructureConfigurationResponse?: shared.CreateInfrastructureConfigurationResponse;
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
