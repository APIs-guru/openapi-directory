import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostEnableAvailabilityZonesForLoadBalancerActionEnum {
    EnableAvailabilityZonesForLoadBalancer = "EnableAvailabilityZonesForLoadBalancer"
}
export declare enum PostEnableAvailabilityZonesForLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostEnableAvailabilityZonesForLoadBalancerQueryParams extends SpeakeasyBase {
    action: PostEnableAvailabilityZonesForLoadBalancerActionEnum;
    version: PostEnableAvailabilityZonesForLoadBalancerVersionEnum;
}
export declare class PostEnableAvailabilityZonesForLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableAvailabilityZonesForLoadBalancerRequest extends SpeakeasyBase {
    queryParams: PostEnableAvailabilityZonesForLoadBalancerQueryParams;
    headers: PostEnableAvailabilityZonesForLoadBalancerHeaders;
    request?: Uint8Array;
}
export declare class PostEnableAvailabilityZonesForLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
