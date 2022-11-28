import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeFlowLogsActionEnum {
    DescribeFlowLogs = "DescribeFlowLogs"
}
export declare enum PostDescribeFlowLogsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeFlowLogsQueryParams extends SpeakeasyBase {
    action: PostDescribeFlowLogsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeFlowLogsVersionEnum;
}
export declare class PostDescribeFlowLogsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeFlowLogsRequest extends SpeakeasyBase {
    queryParams: PostDescribeFlowLogsQueryParams;
    headers: PostDescribeFlowLogsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeFlowLogsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
