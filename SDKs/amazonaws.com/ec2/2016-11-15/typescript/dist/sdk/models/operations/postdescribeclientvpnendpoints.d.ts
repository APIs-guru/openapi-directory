import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeClientVpnEndpointsActionEnum {
    DescribeClientVpnEndpoints = "DescribeClientVpnEndpoints"
}
export declare enum PostDescribeClientVpnEndpointsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeClientVpnEndpointsQueryParams extends SpeakeasyBase {
    action: PostDescribeClientVpnEndpointsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeClientVpnEndpointsVersionEnum;
}
export declare class PostDescribeClientVpnEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeClientVpnEndpointsRequest extends SpeakeasyBase {
    queryParams: PostDescribeClientVpnEndpointsQueryParams;
    headers: PostDescribeClientVpnEndpointsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeClientVpnEndpointsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
