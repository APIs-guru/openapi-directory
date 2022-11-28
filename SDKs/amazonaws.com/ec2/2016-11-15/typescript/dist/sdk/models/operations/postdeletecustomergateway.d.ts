import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteCustomerGatewayActionEnum {
    DeleteCustomerGateway = "DeleteCustomerGateway"
}
export declare enum PostDeleteCustomerGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteCustomerGatewayQueryParams extends SpeakeasyBase {
    action: PostDeleteCustomerGatewayActionEnum;
    version: PostDeleteCustomerGatewayVersionEnum;
}
export declare class PostDeleteCustomerGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteCustomerGatewayRequest extends SpeakeasyBase {
    queryParams: PostDeleteCustomerGatewayQueryParams;
    headers: PostDeleteCustomerGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteCustomerGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
