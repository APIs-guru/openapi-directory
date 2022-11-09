import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAttachVpnGatewayActionEnum {
    AttachVpnGateway = "AttachVpnGateway"
}
export declare enum PostAttachVpnGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAttachVpnGatewayQueryParams extends SpeakeasyBase {
    action: PostAttachVpnGatewayActionEnum;
    version: PostAttachVpnGatewayVersionEnum;
}
export declare class PostAttachVpnGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAttachVpnGatewayRequest extends SpeakeasyBase {
    queryParams: PostAttachVpnGatewayQueryParams;
    headers: PostAttachVpnGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostAttachVpnGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
