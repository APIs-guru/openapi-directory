import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetEnableAvailabilityZonesForLoadBalancerActionEnum {
    EnableAvailabilityZonesForLoadBalancer = "EnableAvailabilityZonesForLoadBalancer"
}
export declare enum GetEnableAvailabilityZonesForLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetEnableAvailabilityZonesForLoadBalancerQueryParams extends SpeakeasyBase {
    action: GetEnableAvailabilityZonesForLoadBalancerActionEnum;
    availabilityZones: string[];
    loadBalancerName: string;
    version: GetEnableAvailabilityZonesForLoadBalancerVersionEnum;
}
export declare class GetEnableAvailabilityZonesForLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableAvailabilityZonesForLoadBalancerRequest extends SpeakeasyBase {
    queryParams: GetEnableAvailabilityZonesForLoadBalancerQueryParams;
    headers: GetEnableAvailabilityZonesForLoadBalancerHeaders;
}
export declare class GetEnableAvailabilityZonesForLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
