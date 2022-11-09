import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteRouteActionEnum {
    DeleteRoute = "DeleteRoute"
}
export declare enum PostDeleteRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteRouteQueryParams extends SpeakeasyBase {
    action: PostDeleteRouteActionEnum;
    version: PostDeleteRouteVersionEnum;
}
export declare class PostDeleteRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteRouteRequest extends SpeakeasyBase {
    queryParams: PostDeleteRouteQueryParams;
    headers: PostDeleteRouteHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
