import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteVpnGatewayActionEnum {
    DeleteVpnGateway = "DeleteVpnGateway"
}
export declare enum PostDeleteVpnGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteVpnGatewayQueryParams extends SpeakeasyBase {
    action: PostDeleteVpnGatewayActionEnum;
    version: PostDeleteVpnGatewayVersionEnum;
}
export declare class PostDeleteVpnGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteVpnGatewayRequest extends SpeakeasyBase {
    queryParams: PostDeleteVpnGatewayQueryParams;
    headers: PostDeleteVpnGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteVpnGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
