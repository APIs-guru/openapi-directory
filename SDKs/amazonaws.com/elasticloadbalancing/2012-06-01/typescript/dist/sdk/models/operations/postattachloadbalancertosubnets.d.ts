import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAttachLoadBalancerToSubnetsActionEnum {
    AttachLoadBalancerToSubnets = "AttachLoadBalancerToSubnets"
}
export declare enum PostAttachLoadBalancerToSubnetsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostAttachLoadBalancerToSubnetsQueryParams extends SpeakeasyBase {
    action: PostAttachLoadBalancerToSubnetsActionEnum;
    version: PostAttachLoadBalancerToSubnetsVersionEnum;
}
export declare class PostAttachLoadBalancerToSubnetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAttachLoadBalancerToSubnetsRequest extends SpeakeasyBase {
    queryParams: PostAttachLoadBalancerToSubnetsQueryParams;
    headers: PostAttachLoadBalancerToSubnetsHeaders;
    request?: Uint8Array;
}
export declare class PostAttachLoadBalancerToSubnetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
