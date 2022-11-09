import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeVpcsActionEnum {
    DescribeVpcs = "DescribeVpcs"
}
export declare enum PostDescribeVpcsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVpcsQueryParams extends SpeakeasyBase {
    action: PostDescribeVpcsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeVpcsVersionEnum;
}
export declare class PostDescribeVpcsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVpcsRequest extends SpeakeasyBase {
    queryParams: PostDescribeVpcsQueryParams;
    headers: PostDescribeVpcsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVpcsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
