import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateLoadBalancerListenersActionEnum {
    CreateLoadBalancerListeners = "CreateLoadBalancerListeners"
}
export declare enum PostCreateLoadBalancerListenersVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostCreateLoadBalancerListenersQueryParams extends SpeakeasyBase {
    action: PostCreateLoadBalancerListenersActionEnum;
    version: PostCreateLoadBalancerListenersVersionEnum;
}
export declare class PostCreateLoadBalancerListenersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateLoadBalancerListenersRequest extends SpeakeasyBase {
    queryParams: PostCreateLoadBalancerListenersQueryParams;
    headers: PostCreateLoadBalancerListenersHeaders;
    request?: Uint8Array;
}
export declare class PostCreateLoadBalancerListenersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
