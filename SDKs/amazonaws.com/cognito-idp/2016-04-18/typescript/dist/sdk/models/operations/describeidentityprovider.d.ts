import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeIdentityProviderXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDescribeIdentityProvider = "AWSCognitoIdentityProviderService.DescribeIdentityProvider"
}
export declare class DescribeIdentityProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeIdentityProviderXAmzTargetEnum;
}
export declare class DescribeIdentityProviderRequest extends SpeakeasyBase {
    headers: DescribeIdentityProviderHeaders;
    request: shared.DescribeIdentityProviderRequest;
}
export declare class DescribeIdentityProviderResponse extends SpeakeasyBase {
    contentType: string;
    describeIdentityProviderResponse?: shared.DescribeIdentityProviderResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
