import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateClientVpnRouteActionEnum {
    CreateClientVpnRoute = "CreateClientVpnRoute"
}
export declare enum PostCreateClientVpnRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateClientVpnRouteQueryParams extends SpeakeasyBase {
    action: PostCreateClientVpnRouteActionEnum;
    version: PostCreateClientVpnRouteVersionEnum;
}
export declare class PostCreateClientVpnRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateClientVpnRouteRequest extends SpeakeasyBase {
    queryParams: PostCreateClientVpnRouteQueryParams;
    headers: PostCreateClientVpnRouteHeaders;
    request?: Uint8Array;
}
export declare class PostCreateClientVpnRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
