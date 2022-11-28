import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostReplaceRouteActionEnum {
    ReplaceRoute = "ReplaceRoute"
}
export declare enum PostReplaceRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostReplaceRouteQueryParams extends SpeakeasyBase {
    action: PostReplaceRouteActionEnum;
    version: PostReplaceRouteVersionEnum;
}
export declare class PostReplaceRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostReplaceRouteRequest extends SpeakeasyBase {
    queryParams: PostReplaceRouteQueryParams;
    headers: PostReplaceRouteHeaders;
    request?: Uint8Array;
}
export declare class PostReplaceRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
