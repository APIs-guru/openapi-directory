import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAttachLoadBalancersActionEnum {
    AttachLoadBalancers = "AttachLoadBalancers"
}
export declare enum PostAttachLoadBalancersVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostAttachLoadBalancersQueryParams extends SpeakeasyBase {
    action: PostAttachLoadBalancersActionEnum;
    version: PostAttachLoadBalancersVersionEnum;
}
export declare class PostAttachLoadBalancersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAttachLoadBalancersRequest extends SpeakeasyBase {
    queryParams: PostAttachLoadBalancersQueryParams;
    headers: PostAttachLoadBalancersHeaders;
    request?: Uint8Array;
}
export declare class PostAttachLoadBalancersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
