import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyVpnConnectionOptionsActionEnum {
    ModifyVpnConnectionOptions = "ModifyVpnConnectionOptions"
}
export declare enum GetModifyVpnConnectionOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyVpnConnectionOptionsQueryParams extends SpeakeasyBase {
    action: GetModifyVpnConnectionOptionsActionEnum;
    dryRun?: boolean;
    localIpv4NetworkCidr?: string;
    localIpv6NetworkCidr?: string;
    remoteIpv4NetworkCidr?: string;
    remoteIpv6NetworkCidr?: string;
    version: GetModifyVpnConnectionOptionsVersionEnum;
    vpnConnectionId: string;
}
export declare class GetModifyVpnConnectionOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyVpnConnectionOptionsRequest extends SpeakeasyBase {
    queryParams: GetModifyVpnConnectionOptionsQueryParams;
    headers: GetModifyVpnConnectionOptionsHeaders;
}
export declare class GetModifyVpnConnectionOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
