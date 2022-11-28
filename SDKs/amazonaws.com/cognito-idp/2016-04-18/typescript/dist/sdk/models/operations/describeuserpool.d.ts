import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeUserPoolXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDescribeUserPool = "AWSCognitoIdentityProviderService.DescribeUserPool"
}
export declare class DescribeUserPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUserPoolXAmzTargetEnum;
}
export declare class DescribeUserPoolRequest extends SpeakeasyBase {
    headers: DescribeUserPoolHeaders;
    request: shared.DescribeUserPoolRequest;
}
export declare class DescribeUserPoolResponse extends SpeakeasyBase {
    contentType: string;
    describeUserPoolResponse?: shared.DescribeUserPoolResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userPoolTaggingException?: any;
}
