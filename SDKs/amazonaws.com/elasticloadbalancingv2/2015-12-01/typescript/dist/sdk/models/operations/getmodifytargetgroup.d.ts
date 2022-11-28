import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyTargetGroupActionEnum {
    ModifyTargetGroup = "ModifyTargetGroup"
}
export declare enum GetModifyTargetGroupHealthCheckProtocolEnum {
    Http = "HTTP",
    Https = "HTTPS",
    Tcp = "TCP",
    Tls = "TLS",
    Udp = "UDP",
    TcpUdp = "TCP_UDP",
    Geneve = "GENEVE"
}
/**
 * The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.
**/
export declare class GetModifyTargetGroupMatcher extends SpeakeasyBase {
    grpcCode?: string;
    httpCode?: string;
}
export declare enum GetModifyTargetGroupVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GetModifyTargetGroupQueryParams extends SpeakeasyBase {
    action: GetModifyTargetGroupActionEnum;
    healthCheckEnabled?: boolean;
    healthCheckIntervalSeconds?: number;
    healthCheckPath?: string;
    healthCheckPort?: string;
    healthCheckProtocol?: GetModifyTargetGroupHealthCheckProtocolEnum;
    healthCheckTimeoutSeconds?: number;
    healthyThresholdCount?: number;
    matcher?: GetModifyTargetGroupMatcher;
    targetGroupArn: string;
    unhealthyThresholdCount?: number;
    version: GetModifyTargetGroupVersionEnum;
}
export declare class GetModifyTargetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyTargetGroupRequest extends SpeakeasyBase {
    queryParams: GetModifyTargetGroupQueryParams;
    headers: GetModifyTargetGroupHeaders;
}
export declare class GetModifyTargetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
