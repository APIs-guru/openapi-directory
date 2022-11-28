import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeTransitGatewayMulticastDomainsActionEnum {
    DescribeTransitGatewayMulticastDomains = "DescribeTransitGatewayMulticastDomains"
}
export declare enum PostDescribeTransitGatewayMulticastDomainsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeTransitGatewayMulticastDomainsQueryParams extends SpeakeasyBase {
    action: PostDescribeTransitGatewayMulticastDomainsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeTransitGatewayMulticastDomainsVersionEnum;
}
export declare class PostDescribeTransitGatewayMulticastDomainsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTransitGatewayMulticastDomainsRequest extends SpeakeasyBase {
    queryParams: PostDescribeTransitGatewayMulticastDomainsQueryParams;
    headers: PostDescribeTransitGatewayMulticastDomainsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTransitGatewayMulticastDomainsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
