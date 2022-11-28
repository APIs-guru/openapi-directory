import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeUserPoolClientXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDescribeUserPoolClient = "AWSCognitoIdentityProviderService.DescribeUserPoolClient"
}
export declare class DescribeUserPoolClientHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUserPoolClientXAmzTargetEnum;
}
export declare class DescribeUserPoolClientRequest extends SpeakeasyBase {
    headers: DescribeUserPoolClientHeaders;
    request: shared.DescribeUserPoolClientRequest;
}
export declare class DescribeUserPoolClientResponse extends SpeakeasyBase {
    contentType: string;
    describeUserPoolClientResponse?: shared.DescribeUserPoolClientResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
