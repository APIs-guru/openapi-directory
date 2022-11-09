import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteInternetGatewayActionEnum {
    DeleteInternetGateway = "DeleteInternetGateway"
}
export declare enum PostDeleteInternetGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteInternetGatewayQueryParams extends SpeakeasyBase {
    action: PostDeleteInternetGatewayActionEnum;
    version: PostDeleteInternetGatewayVersionEnum;
}
export declare class PostDeleteInternetGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteInternetGatewayRequest extends SpeakeasyBase {
    queryParams: PostDeleteInternetGatewayQueryParams;
    headers: PostDeleteInternetGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteInternetGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
