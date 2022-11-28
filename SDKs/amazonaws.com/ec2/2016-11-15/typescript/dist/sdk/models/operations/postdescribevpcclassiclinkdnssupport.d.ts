import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeVpcClassicLinkDnsSupportActionEnum {
    DescribeVpcClassicLinkDnsSupport = "DescribeVpcClassicLinkDnsSupport"
}
export declare enum PostDescribeVpcClassicLinkDnsSupportVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVpcClassicLinkDnsSupportQueryParams extends SpeakeasyBase {
    action: PostDescribeVpcClassicLinkDnsSupportActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeVpcClassicLinkDnsSupportVersionEnum;
}
export declare class PostDescribeVpcClassicLinkDnsSupportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVpcClassicLinkDnsSupportRequest extends SpeakeasyBase {
    queryParams: PostDescribeVpcClassicLinkDnsSupportQueryParams;
    headers: PostDescribeVpcClassicLinkDnsSupportHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVpcClassicLinkDnsSupportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
