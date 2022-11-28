import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteEgressOnlyInternetGatewayActionEnum {
    DeleteEgressOnlyInternetGateway = "DeleteEgressOnlyInternetGateway"
}
export declare enum PostDeleteEgressOnlyInternetGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteEgressOnlyInternetGatewayQueryParams extends SpeakeasyBase {
    action: PostDeleteEgressOnlyInternetGatewayActionEnum;
    version: PostDeleteEgressOnlyInternetGatewayVersionEnum;
}
export declare class PostDeleteEgressOnlyInternetGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteEgressOnlyInternetGatewayRequest extends SpeakeasyBase {
    queryParams: PostDeleteEgressOnlyInternetGatewayQueryParams;
    headers: PostDeleteEgressOnlyInternetGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteEgressOnlyInternetGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
