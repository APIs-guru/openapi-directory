import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteVpnConnectionActionEnum {
    DeleteVpnConnection = "DeleteVpnConnection"
}
export declare enum PostDeleteVpnConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteVpnConnectionQueryParams extends SpeakeasyBase {
    action: PostDeleteVpnConnectionActionEnum;
    version: PostDeleteVpnConnectionVersionEnum;
}
export declare class PostDeleteVpnConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteVpnConnectionRequest extends SpeakeasyBase {
    queryParams: PostDeleteVpnConnectionQueryParams;
    headers: PostDeleteVpnConnectionHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteVpnConnectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
