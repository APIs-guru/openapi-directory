import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateLoadBalancerActionEnum {
    CreateLoadBalancer = "CreateLoadBalancer"
}
export declare enum PostCreateLoadBalancerVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostCreateLoadBalancerQueryParams extends SpeakeasyBase {
    action: PostCreateLoadBalancerActionEnum;
    version: PostCreateLoadBalancerVersionEnum;
}
export declare class PostCreateLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateLoadBalancerRequest extends SpeakeasyBase {
    queryParams: PostCreateLoadBalancerQueryParams;
    headers: PostCreateLoadBalancerHeaders;
    request?: Uint8Array;
}
export declare class PostCreateLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
