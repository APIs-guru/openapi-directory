import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateEgressOnlyInternetGatewayActionEnum {
    CreateEgressOnlyInternetGateway = "CreateEgressOnlyInternetGateway"
}
export declare enum PostCreateEgressOnlyInternetGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateEgressOnlyInternetGatewayQueryParams extends SpeakeasyBase {
    action: PostCreateEgressOnlyInternetGatewayActionEnum;
    version: PostCreateEgressOnlyInternetGatewayVersionEnum;
}
export declare class PostCreateEgressOnlyInternetGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateEgressOnlyInternetGatewayRequest extends SpeakeasyBase {
    queryParams: PostCreateEgressOnlyInternetGatewayQueryParams;
    headers: PostCreateEgressOnlyInternetGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostCreateEgressOnlyInternetGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
