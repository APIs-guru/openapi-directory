import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateCustomerGatewayActionEnum {
    CreateCustomerGateway = "CreateCustomerGateway"
}
export declare enum PostCreateCustomerGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateCustomerGatewayQueryParams extends SpeakeasyBase {
    action: PostCreateCustomerGatewayActionEnum;
    version: PostCreateCustomerGatewayVersionEnum;
}
export declare class PostCreateCustomerGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateCustomerGatewayRequest extends SpeakeasyBase {
    queryParams: PostCreateCustomerGatewayQueryParams;
    headers: PostCreateCustomerGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostCreateCustomerGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
