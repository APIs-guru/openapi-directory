import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDistributionConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDistributionConfigurationRequestBody extends SpeakeasyBase {
    clientToken: string;
    description?: string;
    distributions: shared.Distribution[];
    name: string;
    tags?: Map<string, string>;
}
export declare class CreateDistributionConfigurationRequest extends SpeakeasyBase {
    headers: CreateDistributionConfigurationHeaders;
    request: CreateDistributionConfigurationRequestBody;
}
export declare class CreateDistributionConfigurationResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    createDistributionConfigurationResponse?: shared.CreateDistributionConfigurationResponse;
    forbiddenException?: any;
    idempotentParameterMismatchException?: any;
    invalidParameterCombinationException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    serviceException?: any;
    serviceQuotaExceededException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
