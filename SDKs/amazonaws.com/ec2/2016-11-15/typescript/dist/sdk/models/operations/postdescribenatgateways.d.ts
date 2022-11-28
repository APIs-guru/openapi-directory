import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeNatGatewaysActionEnum {
    DescribeNatGateways = "DescribeNatGateways"
}
export declare enum PostDescribeNatGatewaysVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeNatGatewaysQueryParams extends SpeakeasyBase {
    action: PostDescribeNatGatewaysActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeNatGatewaysVersionEnum;
}
export declare class PostDescribeNatGatewaysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeNatGatewaysRequest extends SpeakeasyBase {
    queryParams: PostDescribeNatGatewaysQueryParams;
    headers: PostDescribeNatGatewaysHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeNatGatewaysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
