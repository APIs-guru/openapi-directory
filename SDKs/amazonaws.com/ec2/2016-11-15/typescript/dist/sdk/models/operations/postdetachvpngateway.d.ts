import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDetachVpnGatewayActionEnum {
    DetachVpnGateway = "DetachVpnGateway"
}
export declare enum PostDetachVpnGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDetachVpnGatewayQueryParams extends SpeakeasyBase {
    action: PostDetachVpnGatewayActionEnum;
    version: PostDetachVpnGatewayVersionEnum;
}
export declare class PostDetachVpnGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDetachVpnGatewayRequest extends SpeakeasyBase {
    queryParams: PostDetachVpnGatewayQueryParams;
    headers: PostDetachVpnGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostDetachVpnGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
