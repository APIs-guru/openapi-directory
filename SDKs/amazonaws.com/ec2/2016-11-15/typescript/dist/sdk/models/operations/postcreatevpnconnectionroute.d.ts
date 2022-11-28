import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateVpnConnectionRouteActionEnum {
    CreateVpnConnectionRoute = "CreateVpnConnectionRoute"
}
export declare enum PostCreateVpnConnectionRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateVpnConnectionRouteQueryParams extends SpeakeasyBase {
    action: PostCreateVpnConnectionRouteActionEnum;
    version: PostCreateVpnConnectionRouteVersionEnum;
}
export declare class PostCreateVpnConnectionRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateVpnConnectionRouteRequest extends SpeakeasyBase {
    queryParams: PostCreateVpnConnectionRouteQueryParams;
    headers: PostCreateVpnConnectionRouteHeaders;
    request?: Uint8Array;
}
export declare class PostCreateVpnConnectionRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
