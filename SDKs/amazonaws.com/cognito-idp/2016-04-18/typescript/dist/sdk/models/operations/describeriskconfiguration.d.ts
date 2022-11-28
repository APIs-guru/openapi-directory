import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeRiskConfigurationXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDescribeRiskConfiguration = "AWSCognitoIdentityProviderService.DescribeRiskConfiguration"
}
export declare class DescribeRiskConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRiskConfigurationXAmzTargetEnum;
}
export declare class DescribeRiskConfigurationRequest extends SpeakeasyBase {
    headers: DescribeRiskConfigurationHeaders;
    request: shared.DescribeRiskConfigurationRequest;
}
export declare class DescribeRiskConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    describeRiskConfigurationResponse?: shared.DescribeRiskConfigurationResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userPoolAddOnNotEnabledException?: any;
}
