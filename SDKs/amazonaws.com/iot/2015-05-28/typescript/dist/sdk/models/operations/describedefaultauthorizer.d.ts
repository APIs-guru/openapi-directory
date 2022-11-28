import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeDefaultAuthorizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDefaultAuthorizerRequest extends SpeakeasyBase {
    headers: DescribeDefaultAuthorizerHeaders;
}
export declare class DescribeDefaultAuthorizerResponse extends SpeakeasyBase {
    contentType: string;
    describeDefaultAuthorizerResponse?: shared.DescribeDefaultAuthorizerResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
