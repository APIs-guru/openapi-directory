import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateVpnConnectionActionEnum {
    CreateVpnConnection = "CreateVpnConnection"
}
export declare enum PostCreateVpnConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateVpnConnectionQueryParams extends SpeakeasyBase {
    action: PostCreateVpnConnectionActionEnum;
    version: PostCreateVpnConnectionVersionEnum;
}
export declare class PostCreateVpnConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateVpnConnectionRequest extends SpeakeasyBase {
    queryParams: PostCreateVpnConnectionQueryParams;
    headers: PostCreateVpnConnectionHeaders;
    request?: Uint8Array;
}
export declare class PostCreateVpnConnectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
