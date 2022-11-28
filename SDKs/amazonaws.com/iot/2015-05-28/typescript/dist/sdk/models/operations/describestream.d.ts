import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeStreamPathParams extends SpeakeasyBase {
    streamId: string;
}
export declare class DescribeStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeStreamRequest extends SpeakeasyBase {
    pathParams: DescribeStreamPathParams;
    headers: DescribeStreamHeaders;
}
export declare class DescribeStreamResponse extends SpeakeasyBase {
    contentType: string;
    describeStreamResponse?: shared.DescribeStreamResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
