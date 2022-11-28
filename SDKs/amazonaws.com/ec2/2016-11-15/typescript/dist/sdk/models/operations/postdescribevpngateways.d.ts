import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeVpnGatewaysActionEnum {
    DescribeVpnGateways = "DescribeVpnGateways"
}
export declare enum PostDescribeVpnGatewaysVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVpnGatewaysQueryParams extends SpeakeasyBase {
    action: PostDescribeVpnGatewaysActionEnum;
    version: PostDescribeVpnGatewaysVersionEnum;
}
export declare class PostDescribeVpnGatewaysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVpnGatewaysRequest extends SpeakeasyBase {
    queryParams: PostDescribeVpnGatewaysQueryParams;
    headers: PostDescribeVpnGatewaysHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVpnGatewaysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
