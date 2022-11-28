import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyVpnTunnelCertificateActionEnum {
    ModifyVpnTunnelCertificate = "ModifyVpnTunnelCertificate"
}
export declare enum PostModifyVpnTunnelCertificateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyVpnTunnelCertificateQueryParams extends SpeakeasyBase {
    action: PostModifyVpnTunnelCertificateActionEnum;
    version: PostModifyVpnTunnelCertificateVersionEnum;
}
export declare class PostModifyVpnTunnelCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyVpnTunnelCertificateRequest extends SpeakeasyBase {
    queryParams: PostModifyVpnTunnelCertificateQueryParams;
    headers: PostModifyVpnTunnelCertificateHeaders;
    request?: Uint8Array;
}
export declare class PostModifyVpnTunnelCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
