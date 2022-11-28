import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyVpnConnectionActionEnum {
    ModifyVpnConnection = "ModifyVpnConnection"
}
export declare enum GetModifyVpnConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyVpnConnectionQueryParams extends SpeakeasyBase {
    action: GetModifyVpnConnectionActionEnum;
    customerGatewayId?: string;
    dryRun?: boolean;
    transitGatewayId?: string;
    version: GetModifyVpnConnectionVersionEnum;
    vpnConnectionId: string;
    vpnGatewayId?: string;
}
export declare class GetModifyVpnConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyVpnConnectionRequest extends SpeakeasyBase {
    queryParams: GetModifyVpnConnectionQueryParams;
    headers: GetModifyVpnConnectionHeaders;
}
export declare class GetModifyVpnConnectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
