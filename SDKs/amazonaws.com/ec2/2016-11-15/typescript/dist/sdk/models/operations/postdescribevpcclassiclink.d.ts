import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeVpcClassicLinkActionEnum {
    DescribeVpcClassicLink = "DescribeVpcClassicLink"
}
export declare enum PostDescribeVpcClassicLinkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVpcClassicLinkQueryParams extends SpeakeasyBase {
    action: PostDescribeVpcClassicLinkActionEnum;
    version: PostDescribeVpcClassicLinkVersionEnum;
}
export declare class PostDescribeVpcClassicLinkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVpcClassicLinkRequest extends SpeakeasyBase {
    queryParams: PostDescribeVpcClassicLinkQueryParams;
    headers: PostDescribeVpcClassicLinkHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVpcClassicLinkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
