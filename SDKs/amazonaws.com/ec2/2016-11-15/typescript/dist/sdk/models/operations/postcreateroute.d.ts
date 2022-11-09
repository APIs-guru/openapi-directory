import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateRouteActionEnum {
    CreateRoute = "CreateRoute"
}
export declare enum PostCreateRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateRouteQueryParams extends SpeakeasyBase {
    action: PostCreateRouteActionEnum;
    version: PostCreateRouteVersionEnum;
}
export declare class PostCreateRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateRouteRequest extends SpeakeasyBase {
    queryParams: PostCreateRouteQueryParams;
    headers: PostCreateRouteHeaders;
    request?: Uint8Array;
}
export declare class PostCreateRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
