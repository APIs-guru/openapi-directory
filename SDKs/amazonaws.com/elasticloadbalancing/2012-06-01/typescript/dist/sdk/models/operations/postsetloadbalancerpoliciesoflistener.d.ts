import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSetLoadBalancerPoliciesOfListenerActionEnum {
    SetLoadBalancerPoliciesOfListener = "SetLoadBalancerPoliciesOfListener"
}
export declare enum PostSetLoadBalancerPoliciesOfListenerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostSetLoadBalancerPoliciesOfListenerQueryParams extends SpeakeasyBase {
    action: PostSetLoadBalancerPoliciesOfListenerActionEnum;
    version: PostSetLoadBalancerPoliciesOfListenerVersionEnum;
}
export declare class PostSetLoadBalancerPoliciesOfListenerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetLoadBalancerPoliciesOfListenerRequest extends SpeakeasyBase {
    queryParams: PostSetLoadBalancerPoliciesOfListenerQueryParams;
    headers: PostSetLoadBalancerPoliciesOfListenerHeaders;
    request?: Uint8Array;
}
export declare class PostSetLoadBalancerPoliciesOfListenerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
