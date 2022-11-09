import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteNatGatewayActionEnum {
    DeleteNatGateway = "DeleteNatGateway"
}
export declare enum PostDeleteNatGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteNatGatewayQueryParams extends SpeakeasyBase {
    action: PostDeleteNatGatewayActionEnum;
    version: PostDeleteNatGatewayVersionEnum;
}
export declare class PostDeleteNatGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteNatGatewayRequest extends SpeakeasyBase {
    queryParams: PostDeleteNatGatewayQueryParams;
    headers: PostDeleteNatGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteNatGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
