import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateLoadBalancerPolicyActionEnum {
    CreateLoadBalancerPolicy = "CreateLoadBalancerPolicy"
}
export declare enum PostCreateLoadBalancerPolicyVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostCreateLoadBalancerPolicyQueryParams extends SpeakeasyBase {
    action: PostCreateLoadBalancerPolicyActionEnum;
    version: PostCreateLoadBalancerPolicyVersionEnum;
}
export declare class PostCreateLoadBalancerPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateLoadBalancerPolicyRequest extends SpeakeasyBase {
    queryParams: PostCreateLoadBalancerPolicyQueryParams;
    headers: PostCreateLoadBalancerPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostCreateLoadBalancerPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
