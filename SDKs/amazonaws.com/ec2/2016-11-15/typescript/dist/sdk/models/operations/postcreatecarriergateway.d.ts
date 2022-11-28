import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateCarrierGatewayActionEnum {
    CreateCarrierGateway = "CreateCarrierGateway"
}
export declare enum PostCreateCarrierGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateCarrierGatewayQueryParams extends SpeakeasyBase {
    action: PostCreateCarrierGatewayActionEnum;
    version: PostCreateCarrierGatewayVersionEnum;
}
export declare class PostCreateCarrierGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateCarrierGatewayRequest extends SpeakeasyBase {
    queryParams: PostCreateCarrierGatewayQueryParams;
    headers: PostCreateCarrierGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostCreateCarrierGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
