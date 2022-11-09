import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetTerminateClientVpnConnectionsActionEnum {
    TerminateClientVpnConnections = "TerminateClientVpnConnections"
}
export declare enum GetTerminateClientVpnConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetTerminateClientVpnConnectionsQueryParams extends SpeakeasyBase {
    action: GetTerminateClientVpnConnectionsActionEnum;
    clientVpnEndpointId: string;
    connectionId?: string;
    dryRun?: boolean;
    username?: string;
    version: GetTerminateClientVpnConnectionsVersionEnum;
}
export declare class GetTerminateClientVpnConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTerminateClientVpnConnectionsRequest extends SpeakeasyBase {
    queryParams: GetTerminateClientVpnConnectionsQueryParams;
    headers: GetTerminateClientVpnConnectionsHeaders;
}
export declare class GetTerminateClientVpnConnectionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
