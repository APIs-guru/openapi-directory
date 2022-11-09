import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyLoadBalancerAttributesActionEnum {
    ModifyLoadBalancerAttributes = "ModifyLoadBalancerAttributes"
}
export declare enum PostModifyLoadBalancerAttributesVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostModifyLoadBalancerAttributesQueryParams extends SpeakeasyBase {
    action: PostModifyLoadBalancerAttributesActionEnum;
    version: PostModifyLoadBalancerAttributesVersionEnum;
}
export declare class PostModifyLoadBalancerAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyLoadBalancerAttributesRequest extends SpeakeasyBase {
    queryParams: PostModifyLoadBalancerAttributesQueryParams;
    headers: PostModifyLoadBalancerAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostModifyLoadBalancerAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
