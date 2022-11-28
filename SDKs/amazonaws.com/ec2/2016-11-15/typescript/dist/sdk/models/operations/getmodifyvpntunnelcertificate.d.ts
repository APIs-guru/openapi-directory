import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyVpnTunnelCertificateActionEnum {
    ModifyVpnTunnelCertificate = "ModifyVpnTunnelCertificate"
}
export declare enum GetModifyVpnTunnelCertificateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyVpnTunnelCertificateQueryParams extends SpeakeasyBase {
    action: GetModifyVpnTunnelCertificateActionEnum;
    dryRun?: boolean;
    version: GetModifyVpnTunnelCertificateVersionEnum;
    vpnConnectionId: string;
    vpnTunnelOutsideIpAddress: string;
}
export declare class GetModifyVpnTunnelCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyVpnTunnelCertificateRequest extends SpeakeasyBase {
    queryParams: GetModifyVpnTunnelCertificateQueryParams;
    headers: GetModifyVpnTunnelCertificateHeaders;
}
export declare class GetModifyVpnTunnelCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
