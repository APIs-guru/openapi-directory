import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeJobQueuesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class DescribeJobQueuesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeJobQueuesRequestBody extends SpeakeasyBase {
    jobQueues?: string[];
    maxResults?: number;
    nextToken?: string;
}
export declare class DescribeJobQueuesRequest extends SpeakeasyBase {
    queryParams: DescribeJobQueuesQueryParams;
    headers: DescribeJobQueuesHeaders;
    request: DescribeJobQueuesRequestBody;
}
export declare class DescribeJobQueuesResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeJobQueuesResponse?: shared.DescribeJobQueuesResponse;
    serverException?: any;
    statusCode: number;
}
