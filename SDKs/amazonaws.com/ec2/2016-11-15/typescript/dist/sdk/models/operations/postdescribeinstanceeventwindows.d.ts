import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeInstanceEventWindowsActionEnum {
    DescribeInstanceEventWindows = "DescribeInstanceEventWindows"
}
export declare enum PostDescribeInstanceEventWindowsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeInstanceEventWindowsQueryParams extends SpeakeasyBase {
    action: PostDescribeInstanceEventWindowsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeInstanceEventWindowsVersionEnum;
}
export declare class PostDescribeInstanceEventWindowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeInstanceEventWindowsRequest extends SpeakeasyBase {
    queryParams: PostDescribeInstanceEventWindowsQueryParams;
    headers: PostDescribeInstanceEventWindowsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeInstanceEventWindowsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
