import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDisableAvailabilityZonesForLoadBalancerActionEnum {
    DisableAvailabilityZonesForLoadBalancer = "DisableAvailabilityZonesForLoadBalancer"
}
export declare enum PostDisableAvailabilityZonesForLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostDisableAvailabilityZonesForLoadBalancerQueryParams extends SpeakeasyBase {
    action: PostDisableAvailabilityZonesForLoadBalancerActionEnum;
    version: PostDisableAvailabilityZonesForLoadBalancerVersionEnum;
}
export declare class PostDisableAvailabilityZonesForLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisableAvailabilityZonesForLoadBalancerRequest extends SpeakeasyBase {
    queryParams: PostDisableAvailabilityZonesForLoadBalancerQueryParams;
    headers: PostDisableAvailabilityZonesForLoadBalancerHeaders;
    request?: Uint8Array;
}
export declare class PostDisableAvailabilityZonesForLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
