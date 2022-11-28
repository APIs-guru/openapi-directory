import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class DescribeJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeJobRequest extends SpeakeasyBase {
    pathParams: DescribeJobPathParams;
    headers: DescribeJobHeaders;
}
export declare class DescribeJobResponse extends SpeakeasyBase {
    contentType: string;
    describeJobResponse?: shared.DescribeJobResponse;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
