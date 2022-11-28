import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetConfigureHealthCheckActionEnum {
    ConfigureHealthCheck = "ConfigureHealthCheck"
}
/**
 * Information about a health check.
**/
export declare class GetConfigureHealthCheckHealthCheck extends SpeakeasyBase {
    healthyThreshold: number;
    interval: number;
    target: string;
    timeout: number;
    unhealthyThreshold: number;
}
export declare enum GetConfigureHealthCheckVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetConfigureHealthCheckQueryParams extends SpeakeasyBase {
    action: GetConfigureHealthCheckActionEnum;
    healthCheck: GetConfigureHealthCheckHealthCheck;
    loadBalancerName: string;
    version: GetConfigureHealthCheckVersionEnum;
}
export declare class GetConfigureHealthCheckHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetConfigureHealthCheckRequest extends SpeakeasyBase {
    queryParams: GetConfigureHealthCheckQueryParams;
    headers: GetConfigureHealthCheckHeaders;
}
export declare class GetConfigureHealthCheckResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
