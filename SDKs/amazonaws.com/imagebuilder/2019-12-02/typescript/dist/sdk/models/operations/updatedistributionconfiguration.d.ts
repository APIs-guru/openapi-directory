import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDistributionConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDistributionConfigurationRequestBody extends SpeakeasyBase {
    clientToken: string;
    description?: string;
    distributionConfigurationArn: string;
    distributions: shared.Distribution[];
}
export declare class UpdateDistributionConfigurationRequest extends SpeakeasyBase {
    headers: UpdateDistributionConfigurationHeaders;
    request: UpdateDistributionConfigurationRequestBody;
}
export declare class UpdateDistributionConfigurationResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    idempotentParameterMismatchException?: any;
    invalidParameterCombinationException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    updateDistributionConfigurationResponse?: shared.UpdateDistributionConfigurationResponse;
}
