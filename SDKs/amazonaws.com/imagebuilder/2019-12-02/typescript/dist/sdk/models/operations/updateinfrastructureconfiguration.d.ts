import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateInfrastructureConfigurationHeaders extends SpeakeasyBase {
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
export declare class UpdateInfrastructureConfigurationRequestBodyLogging extends SpeakeasyBase {
    s3Logs?: shared.S3Logs;
}
export declare class UpdateInfrastructureConfigurationRequestBody extends SpeakeasyBase {
    clientToken: string;
    description?: string;
    infrastructureConfigurationArn: string;
    instanceProfileName: string;
    instanceTypes?: string[];
    keyPair?: string;
    logging?: UpdateInfrastructureConfigurationRequestBodyLogging;
    resourceTags?: Map<string, string>;
    securityGroupIds?: string[];
    snsTopicArn?: string;
    subnetId?: string;
    terminateInstanceOnFailure?: boolean;
}
export declare class UpdateInfrastructureConfigurationRequest extends SpeakeasyBase {
    headers: UpdateInfrastructureConfigurationHeaders;
    request: UpdateInfrastructureConfigurationRequestBody;
}
export declare class UpdateInfrastructureConfigurationResponse extends SpeakeasyBase {
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
    updateInfrastructureConfigurationResponse?: shared.UpdateInfrastructureConfigurationResponse;
}
