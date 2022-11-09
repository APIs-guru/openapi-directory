import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeVpcEndpointsActionEnum {
    DescribeVpcEndpoints = "DescribeVpcEndpoints"
}
export declare enum PostDescribeVpcEndpointsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVpcEndpointsQueryParams extends SpeakeasyBase {
    action: PostDescribeVpcEndpointsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeVpcEndpointsVersionEnum;
}
export declare class PostDescribeVpcEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVpcEndpointsRequest extends SpeakeasyBase {
    queryParams: PostDescribeVpcEndpointsQueryParams;
    headers: PostDescribeVpcEndpointsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVpcEndpointsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
