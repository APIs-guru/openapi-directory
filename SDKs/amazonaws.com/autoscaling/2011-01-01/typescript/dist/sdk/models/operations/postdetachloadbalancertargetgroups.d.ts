import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDetachLoadBalancerTargetGroupsActionEnum {
    DetachLoadBalancerTargetGroups = "DetachLoadBalancerTargetGroups"
}
export declare enum PostDetachLoadBalancerTargetGroupsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDetachLoadBalancerTargetGroupsQueryParams extends SpeakeasyBase {
    action: PostDetachLoadBalancerTargetGroupsActionEnum;
    version: PostDetachLoadBalancerTargetGroupsVersionEnum;
}
export declare class PostDetachLoadBalancerTargetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDetachLoadBalancerTargetGroupsRequest extends SpeakeasyBase {
    queryParams: PostDetachLoadBalancerTargetGroupsQueryParams;
    headers: PostDetachLoadBalancerTargetGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDetachLoadBalancerTargetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
