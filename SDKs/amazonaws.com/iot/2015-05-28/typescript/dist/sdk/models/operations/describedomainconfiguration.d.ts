import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeDomainConfigurationPathParams extends SpeakeasyBase {
    domainConfigurationName: string;
}
export declare class DescribeDomainConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDomainConfigurationRequest extends SpeakeasyBase {
    pathParams: DescribeDomainConfigurationPathParams;
    headers: DescribeDomainConfigurationHeaders;
}
export declare class DescribeDomainConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    describeDomainConfigurationResponse?: shared.DescribeDomainConfigurationResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
