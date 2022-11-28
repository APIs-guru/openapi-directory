import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateTransitGatewayActionEnum {
    CreateTransitGateway = "CreateTransitGateway"
}
export declare enum PostCreateTransitGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateTransitGatewayQueryParams extends SpeakeasyBase {
    action: PostCreateTransitGatewayActionEnum;
    version: PostCreateTransitGatewayVersionEnum;
}
export declare class PostCreateTransitGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateTransitGatewayRequest extends SpeakeasyBase {
    queryParams: PostCreateTransitGatewayQueryParams;
    headers: PostCreateTransitGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostCreateTransitGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
