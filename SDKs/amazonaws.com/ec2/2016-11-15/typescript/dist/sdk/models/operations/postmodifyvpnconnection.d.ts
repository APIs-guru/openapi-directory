import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyVpnConnectionActionEnum {
    ModifyVpnConnection = "ModifyVpnConnection"
}
export declare enum PostModifyVpnConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyVpnConnectionQueryParams extends SpeakeasyBase {
    action: PostModifyVpnConnectionActionEnum;
    version: PostModifyVpnConnectionVersionEnum;
}
export declare class PostModifyVpnConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyVpnConnectionRequest extends SpeakeasyBase {
    queryParams: PostModifyVpnConnectionQueryParams;
    headers: PostModifyVpnConnectionHeaders;
    request?: Uint8Array;
}
export declare class PostModifyVpnConnectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
