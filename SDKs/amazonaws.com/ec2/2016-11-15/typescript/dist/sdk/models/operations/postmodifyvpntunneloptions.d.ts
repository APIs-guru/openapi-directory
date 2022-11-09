import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyVpnTunnelOptionsActionEnum {
    ModifyVpnTunnelOptions = "ModifyVpnTunnelOptions"
}
export declare enum PostModifyVpnTunnelOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyVpnTunnelOptionsQueryParams extends SpeakeasyBase {
    action: PostModifyVpnTunnelOptionsActionEnum;
    version: PostModifyVpnTunnelOptionsVersionEnum;
}
export declare class PostModifyVpnTunnelOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyVpnTunnelOptionsRequest extends SpeakeasyBase {
    queryParams: PostModifyVpnTunnelOptionsQueryParams;
    headers: PostModifyVpnTunnelOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostModifyVpnTunnelOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
