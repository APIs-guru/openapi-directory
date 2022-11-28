import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateVpnGatewayActionEnum {
    CreateVpnGateway = "CreateVpnGateway"
}
export declare enum PostCreateVpnGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateVpnGatewayQueryParams extends SpeakeasyBase {
    action: PostCreateVpnGatewayActionEnum;
    version: PostCreateVpnGatewayVersionEnum;
}
export declare class PostCreateVpnGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateVpnGatewayRequest extends SpeakeasyBase {
    queryParams: PostCreateVpnGatewayQueryParams;
    headers: PostCreateVpnGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostCreateVpnGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
