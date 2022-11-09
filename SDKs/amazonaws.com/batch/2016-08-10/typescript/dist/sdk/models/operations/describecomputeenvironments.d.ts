import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeComputeEnvironmentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class DescribeComputeEnvironmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeComputeEnvironmentsRequestBody extends SpeakeasyBase {
    computeEnvironments?: string[];
    maxResults?: number;
    nextToken?: string;
}
export declare class DescribeComputeEnvironmentsRequest extends SpeakeasyBase {
    queryParams: DescribeComputeEnvironmentsQueryParams;
    headers: DescribeComputeEnvironmentsHeaders;
    request: DescribeComputeEnvironmentsRequestBody;
}
export declare class DescribeComputeEnvironmentsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeComputeEnvironmentsResponse?: shared.DescribeComputeEnvironmentsResponse;
    serverException?: any;
    statusCode: number;
}
