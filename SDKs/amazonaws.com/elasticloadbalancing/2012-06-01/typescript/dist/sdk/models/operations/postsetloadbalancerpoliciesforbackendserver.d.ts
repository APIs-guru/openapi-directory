import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostSetLoadBalancerPoliciesForBackendServerActionEnum {
    SetLoadBalancerPoliciesForBackendServer = "SetLoadBalancerPoliciesForBackendServer"
}
export declare enum PostSetLoadBalancerPoliciesForBackendServerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostSetLoadBalancerPoliciesForBackendServerQueryParams extends SpeakeasyBase {
    action: PostSetLoadBalancerPoliciesForBackendServerActionEnum;
    version: PostSetLoadBalancerPoliciesForBackendServerVersionEnum;
}
export declare class PostSetLoadBalancerPoliciesForBackendServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetLoadBalancerPoliciesForBackendServerRequest extends SpeakeasyBase {
    queryParams: PostSetLoadBalancerPoliciesForBackendServerQueryParams;
    headers: PostSetLoadBalancerPoliciesForBackendServerHeaders;
    request?: Uint8Array;
}
export declare class PostSetLoadBalancerPoliciesForBackendServerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
