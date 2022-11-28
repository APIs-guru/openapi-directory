import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeJobsRequestBody extends SpeakeasyBase {
    jobs: string[];
}
export declare class DescribeJobsRequest extends SpeakeasyBase {
    headers: DescribeJobsHeaders;
    request: DescribeJobsRequestBody;
}
export declare class DescribeJobsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeJobsResponse?: shared.DescribeJobsResponse;
    serverException?: any;
    statusCode: number;
}
