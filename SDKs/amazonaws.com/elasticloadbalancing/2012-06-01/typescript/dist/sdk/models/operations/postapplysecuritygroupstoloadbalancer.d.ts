import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostApplySecurityGroupsToLoadBalancerActionEnum {
    ApplySecurityGroupsToLoadBalancer = "ApplySecurityGroupsToLoadBalancer"
}
export declare enum PostApplySecurityGroupsToLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostApplySecurityGroupsToLoadBalancerQueryParams extends SpeakeasyBase {
    action: PostApplySecurityGroupsToLoadBalancerActionEnum;
    version: PostApplySecurityGroupsToLoadBalancerVersionEnum;
}
export declare class PostApplySecurityGroupsToLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostApplySecurityGroupsToLoadBalancerRequest extends SpeakeasyBase {
    queryParams: PostApplySecurityGroupsToLoadBalancerQueryParams;
    headers: PostApplySecurityGroupsToLoadBalancerHeaders;
    request?: Uint8Array;
}
export declare class PostApplySecurityGroupsToLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
