import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAuthorizerPathParams extends SpeakeasyBase {
    authorizerName: string;
}
export declare class DescribeAuthorizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAuthorizerRequest extends SpeakeasyBase {
    pathParams: DescribeAuthorizerPathParams;
    headers: DescribeAuthorizerHeaders;
}
export declare class DescribeAuthorizerResponse extends SpeakeasyBase {
    contentType: string;
    describeAuthorizerResponse?: shared.DescribeAuthorizerResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
