import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyVpnConnectionOptionsActionEnum {
    ModifyVpnConnectionOptions = "ModifyVpnConnectionOptions"
}
export declare enum PostModifyVpnConnectionOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyVpnConnectionOptionsQueryParams extends SpeakeasyBase {
    action: PostModifyVpnConnectionOptionsActionEnum;
    version: PostModifyVpnConnectionOptionsVersionEnum;
}
export declare class PostModifyVpnConnectionOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyVpnConnectionOptionsRequest extends SpeakeasyBase {
    queryParams: PostModifyVpnConnectionOptionsQueryParams;
    headers: PostModifyVpnConnectionOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostModifyVpnConnectionOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
