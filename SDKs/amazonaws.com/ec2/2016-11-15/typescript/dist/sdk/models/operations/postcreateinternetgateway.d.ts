import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateInternetGatewayActionEnum {
    CreateInternetGateway = "CreateInternetGateway"
}
export declare enum PostCreateInternetGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateInternetGatewayQueryParams extends SpeakeasyBase {
    action: PostCreateInternetGatewayActionEnum;
    version: PostCreateInternetGatewayVersionEnum;
}
export declare class PostCreateInternetGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateInternetGatewayRequest extends SpeakeasyBase {
    queryParams: PostCreateInternetGatewayQueryParams;
    headers: PostCreateInternetGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostCreateInternetGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
