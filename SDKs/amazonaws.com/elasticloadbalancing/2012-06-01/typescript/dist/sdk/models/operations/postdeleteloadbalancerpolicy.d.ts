import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteLoadBalancerPolicyActionEnum {
    DeleteLoadBalancerPolicy = "DeleteLoadBalancerPolicy"
}
export declare enum PostDeleteLoadBalancerPolicyVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostDeleteLoadBalancerPolicyQueryParams extends SpeakeasyBase {
    action: PostDeleteLoadBalancerPolicyActionEnum;
    version: PostDeleteLoadBalancerPolicyVersionEnum;
}
export declare class PostDeleteLoadBalancerPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteLoadBalancerPolicyRequest extends SpeakeasyBase {
    queryParams: PostDeleteLoadBalancerPolicyQueryParams;
    headers: PostDeleteLoadBalancerPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteLoadBalancerPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
