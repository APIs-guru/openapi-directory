import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeCarrierGatewaysActionEnum {
    DescribeCarrierGateways = "DescribeCarrierGateways"
}
export declare enum PostDescribeCarrierGatewaysVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeCarrierGatewaysQueryParams extends SpeakeasyBase {
    action: PostDescribeCarrierGatewaysActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeCarrierGatewaysVersionEnum;
}
export declare class PostDescribeCarrierGatewaysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeCarrierGatewaysRequest extends SpeakeasyBase {
    queryParams: PostDescribeCarrierGatewaysQueryParams;
    headers: PostDescribeCarrierGatewaysHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeCarrierGatewaysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
