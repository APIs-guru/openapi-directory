import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetInfrastructureConfigurationQueryParams extends SpeakeasyBase {
    infrastructureConfigurationArn: string;
}
export declare class GetInfrastructureConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInfrastructureConfigurationRequest extends SpeakeasyBase {
    queryParams: GetInfrastructureConfigurationQueryParams;
    headers: GetInfrastructureConfigurationHeaders;
}
export declare class GetInfrastructureConfigurationResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    getInfrastructureConfigurationResponse?: shared.GetInfrastructureConfigurationResponse;
    invalidRequestException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
