import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDetachInternetGatewayActionEnum {
    DetachInternetGateway = "DetachInternetGateway"
}
export declare enum PostDetachInternetGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDetachInternetGatewayQueryParams extends SpeakeasyBase {
    action: PostDetachInternetGatewayActionEnum;
    version: PostDetachInternetGatewayVersionEnum;
}
export declare class PostDetachInternetGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDetachInternetGatewayRequest extends SpeakeasyBase {
    queryParams: PostDetachInternetGatewayQueryParams;
    headers: PostDetachInternetGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostDetachInternetGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
