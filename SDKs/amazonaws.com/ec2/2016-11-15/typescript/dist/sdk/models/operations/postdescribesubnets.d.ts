import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeSubnetsActionEnum {
    DescribeSubnets = "DescribeSubnets"
}
export declare enum PostDescribeSubnetsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeSubnetsQueryParams extends SpeakeasyBase {
    action: PostDescribeSubnetsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeSubnetsVersionEnum;
}
export declare class PostDescribeSubnetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSubnetsRequest extends SpeakeasyBase {
    queryParams: PostDescribeSubnetsQueryParams;
    headers: PostDescribeSubnetsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSubnetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
