import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyClientVpnEndpointActionEnum {
    ModifyClientVpnEndpoint = "ModifyClientVpnEndpoint"
}
/**
 * The options for managing connection authorization for new client connections.
**/
export declare class GetModifyClientVpnEndpointClientConnectOptions extends SpeakeasyBase {
    enabled?: boolean;
    lambdaFunctionArn?: string;
}
/**
 * Describes the client connection logging options for the Client VPN endpoint.
**/
export declare class GetModifyClientVpnEndpointConnectionLogOptions extends SpeakeasyBase {
    cloudwatchLogGroup?: string;
    cloudwatchLogStream?: string;
    enabled?: boolean;
}
/**
 * Information about the DNS server to be used.
**/
export declare class GetModifyClientVpnEndpointDnsServers extends SpeakeasyBase {
    customDnsServers?: string[];
    enabled?: boolean;
}
export declare enum GetModifyClientVpnEndpointSelfServicePortalEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare enum GetModifyClientVpnEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyClientVpnEndpointQueryParams extends SpeakeasyBase {
    action: GetModifyClientVpnEndpointActionEnum;
    clientConnectOptions?: GetModifyClientVpnEndpointClientConnectOptions;
    clientVpnEndpointId: string;
    connectionLogOptions?: GetModifyClientVpnEndpointConnectionLogOptions;
    description?: string;
    dnsServers?: GetModifyClientVpnEndpointDnsServers;
    dryRun?: boolean;
    securityGroupId?: string[];
    selfServicePortal?: GetModifyClientVpnEndpointSelfServicePortalEnum;
    serverCertificateArn?: string;
    splitTunnel?: boolean;
    version: GetModifyClientVpnEndpointVersionEnum;
    vpcId?: string;
    vpnPort?: number;
}
export declare class GetModifyClientVpnEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyClientVpnEndpointRequest extends SpeakeasyBase {
    queryParams: GetModifyClientVpnEndpointQueryParams;
    headers: GetModifyClientVpnEndpointHeaders;
}
export declare class GetModifyClientVpnEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
