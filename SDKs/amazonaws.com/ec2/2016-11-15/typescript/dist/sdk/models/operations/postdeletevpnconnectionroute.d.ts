import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteVpnConnectionRouteActionEnum {
    DeleteVpnConnectionRoute = "DeleteVpnConnectionRoute"
}
export declare enum PostDeleteVpnConnectionRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteVpnConnectionRouteQueryParams extends SpeakeasyBase {
    action: PostDeleteVpnConnectionRouteActionEnum;
    version: PostDeleteVpnConnectionRouteVersionEnum;
}
export declare class PostDeleteVpnConnectionRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteVpnConnectionRouteRequest extends SpeakeasyBase {
    queryParams: PostDeleteVpnConnectionRouteQueryParams;
    headers: PostDeleteVpnConnectionRouteHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteVpnConnectionRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
