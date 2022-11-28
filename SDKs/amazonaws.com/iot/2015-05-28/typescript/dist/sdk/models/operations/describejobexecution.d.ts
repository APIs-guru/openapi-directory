import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeJobExecutionPathParams extends SpeakeasyBase {
    jobId: string;
    thingName: string;
}
export declare class DescribeJobExecutionQueryParams extends SpeakeasyBase {
    executionNumber?: number;
}
export declare class DescribeJobExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeJobExecutionRequest extends SpeakeasyBase {
    pathParams: DescribeJobExecutionPathParams;
    queryParams: DescribeJobExecutionQueryParams;
    headers: DescribeJobExecutionHeaders;
}
export declare class DescribeJobExecutionResponse extends SpeakeasyBase {
    contentType: string;
    describeJobExecutionResponse?: shared.DescribeJobExecutionResponse;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
