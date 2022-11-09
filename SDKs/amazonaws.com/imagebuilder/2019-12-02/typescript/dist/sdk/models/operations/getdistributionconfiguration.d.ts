import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDistributionConfigurationQueryParams extends SpeakeasyBase {
    distributionConfigurationArn: string;
}
export declare class GetDistributionConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDistributionConfigurationRequest extends SpeakeasyBase {
    queryParams: GetDistributionConfigurationQueryParams;
    headers: GetDistributionConfigurationHeaders;
}
export declare class GetDistributionConfigurationResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    getDistributionConfigurationResponse?: shared.GetDistributionConfigurationResponse;
    invalidRequestException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
