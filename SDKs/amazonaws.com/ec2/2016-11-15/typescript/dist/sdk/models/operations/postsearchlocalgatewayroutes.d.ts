import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostSearchLocalGatewayRoutesActionEnum {
    SearchLocalGatewayRoutes = "SearchLocalGatewayRoutes"
}
export declare enum PostSearchLocalGatewayRoutesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostSearchLocalGatewayRoutesQueryParams extends SpeakeasyBase {
    action: PostSearchLocalGatewayRoutesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostSearchLocalGatewayRoutesVersionEnum;
}
export declare class PostSearchLocalGatewayRoutesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSearchLocalGatewayRoutesRequest extends SpeakeasyBase {
    queryParams: PostSearchLocalGatewayRoutesQueryParams;
    headers: PostSearchLocalGatewayRoutesHeaders;
    request?: Uint8Array;
}
export declare class PostSearchLocalGatewayRoutesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
