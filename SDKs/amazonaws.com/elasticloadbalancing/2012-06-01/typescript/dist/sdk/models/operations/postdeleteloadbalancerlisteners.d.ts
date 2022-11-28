import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteLoadBalancerListenersActionEnum {
    DeleteLoadBalancerListeners = "DeleteLoadBalancerListeners"
}
export declare enum PostDeleteLoadBalancerListenersVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostDeleteLoadBalancerListenersQueryParams extends SpeakeasyBase {
    action: PostDeleteLoadBalancerListenersActionEnum;
    version: PostDeleteLoadBalancerListenersVersionEnum;
}
export declare class PostDeleteLoadBalancerListenersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteLoadBalancerListenersRequest extends SpeakeasyBase {
    queryParams: PostDeleteLoadBalancerListenersQueryParams;
    headers: PostDeleteLoadBalancerListenersHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteLoadBalancerListenersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
