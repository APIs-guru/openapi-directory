import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDetachLoadBalancerFromSubnetsActionEnum {
    DetachLoadBalancerFromSubnets = "DetachLoadBalancerFromSubnets"
}
export declare enum PostDetachLoadBalancerFromSubnetsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostDetachLoadBalancerFromSubnetsQueryParams extends SpeakeasyBase {
    action: PostDetachLoadBalancerFromSubnetsActionEnum;
    version: PostDetachLoadBalancerFromSubnetsVersionEnum;
}
export declare class PostDetachLoadBalancerFromSubnetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDetachLoadBalancerFromSubnetsRequest extends SpeakeasyBase {
    queryParams: PostDetachLoadBalancerFromSubnetsQueryParams;
    headers: PostDetachLoadBalancerFromSubnetsHeaders;
    request?: Uint8Array;
}
export declare class PostDetachLoadBalancerFromSubnetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
