import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeTransitGatewaysActionEnum {
    DescribeTransitGateways = "DescribeTransitGateways"
}
export declare enum PostDescribeTransitGatewaysVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeTransitGatewaysQueryParams extends SpeakeasyBase {
    action: PostDescribeTransitGatewaysActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeTransitGatewaysVersionEnum;
}
export declare class PostDescribeTransitGatewaysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTransitGatewaysRequest extends SpeakeasyBase {
    queryParams: PostDescribeTransitGatewaysQueryParams;
    headers: PostDescribeTransitGatewaysHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTransitGatewaysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
