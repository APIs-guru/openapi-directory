import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeResourceServerXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDescribeResourceServer = "AWSCognitoIdentityProviderService.DescribeResourceServer"
}
export declare class DescribeResourceServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeResourceServerXAmzTargetEnum;
}
export declare class DescribeResourceServerRequest extends SpeakeasyBase {
    headers: DescribeResourceServerHeaders;
    request: shared.DescribeResourceServerRequest;
}
export declare class DescribeResourceServerResponse extends SpeakeasyBase {
    contentType: string;
    describeResourceServerResponse?: shared.DescribeResourceServerResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
