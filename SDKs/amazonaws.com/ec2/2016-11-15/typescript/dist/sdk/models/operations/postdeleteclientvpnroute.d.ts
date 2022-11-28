import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteClientVpnRouteActionEnum {
    DeleteClientVpnRoute = "DeleteClientVpnRoute"
}
export declare enum PostDeleteClientVpnRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteClientVpnRouteQueryParams extends SpeakeasyBase {
    action: PostDeleteClientVpnRouteActionEnum;
    version: PostDeleteClientVpnRouteVersionEnum;
}
export declare class PostDeleteClientVpnRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteClientVpnRouteRequest extends SpeakeasyBase {
    queryParams: PostDeleteClientVpnRouteQueryParams;
    headers: PostDeleteClientVpnRouteHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteClientVpnRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
