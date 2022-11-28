import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteCarrierGatewayActionEnum {
    DeleteCarrierGateway = "DeleteCarrierGateway"
}
export declare enum PostDeleteCarrierGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteCarrierGatewayQueryParams extends SpeakeasyBase {
    action: PostDeleteCarrierGatewayActionEnum;
    version: PostDeleteCarrierGatewayVersionEnum;
}
export declare class PostDeleteCarrierGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteCarrierGatewayRequest extends SpeakeasyBase {
    queryParams: PostDeleteCarrierGatewayQueryParams;
    headers: PostDeleteCarrierGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteCarrierGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
