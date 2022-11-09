import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDisableAvailabilityZonesForLoadBalancerActionEnum {
    DisableAvailabilityZonesForLoadBalancer = "DisableAvailabilityZonesForLoadBalancer"
}
export declare enum GetDisableAvailabilityZonesForLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetDisableAvailabilityZonesForLoadBalancerQueryParams extends SpeakeasyBase {
    action: GetDisableAvailabilityZonesForLoadBalancerActionEnum;
    availabilityZones: string[];
    loadBalancerName: string;
    version: GetDisableAvailabilityZonesForLoadBalancerVersionEnum;
}
export declare class GetDisableAvailabilityZonesForLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisableAvailabilityZonesForLoadBalancerRequest extends SpeakeasyBase {
    queryParams: GetDisableAvailabilityZonesForLoadBalancerQueryParams;
    headers: GetDisableAvailabilityZonesForLoadBalancerHeaders;
}
export declare class GetDisableAvailabilityZonesForLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
