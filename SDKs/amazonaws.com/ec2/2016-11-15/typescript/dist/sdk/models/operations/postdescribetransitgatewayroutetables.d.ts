import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeTransitGatewayRouteTablesActionEnum {
    DescribeTransitGatewayRouteTables = "DescribeTransitGatewayRouteTables"
}
export declare enum PostDescribeTransitGatewayRouteTablesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeTransitGatewayRouteTablesQueryParams extends SpeakeasyBase {
    action: PostDescribeTransitGatewayRouteTablesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeTransitGatewayRouteTablesVersionEnum;
}
export declare class PostDescribeTransitGatewayRouteTablesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTransitGatewayRouteTablesRequest extends SpeakeasyBase {
    queryParams: PostDescribeTransitGatewayRouteTablesQueryParams;
    headers: PostDescribeTransitGatewayRouteTablesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTransitGatewayRouteTablesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
