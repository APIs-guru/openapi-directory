import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateNatGatewayActionEnum {
    CreateNatGateway = "CreateNatGateway"
}
export declare enum PostCreateNatGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateNatGatewayQueryParams extends SpeakeasyBase {
    action: PostCreateNatGatewayActionEnum;
    version: PostCreateNatGatewayVersionEnum;
}
export declare class PostCreateNatGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateNatGatewayRequest extends SpeakeasyBase {
    queryParams: PostCreateNatGatewayQueryParams;
    headers: PostCreateNatGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostCreateNatGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
