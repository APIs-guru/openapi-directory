import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAttachLoadBalancerTargetGroupsActionEnum {
    AttachLoadBalancerTargetGroups = "AttachLoadBalancerTargetGroups"
}
export declare enum PostAttachLoadBalancerTargetGroupsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostAttachLoadBalancerTargetGroupsQueryParams extends SpeakeasyBase {
    action: PostAttachLoadBalancerTargetGroupsActionEnum;
    version: PostAttachLoadBalancerTargetGroupsVersionEnum;
}
export declare class PostAttachLoadBalancerTargetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAttachLoadBalancerTargetGroupsRequest extends SpeakeasyBase {
    queryParams: PostAttachLoadBalancerTargetGroupsQueryParams;
    headers: PostAttachLoadBalancerTargetGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostAttachLoadBalancerTargetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
