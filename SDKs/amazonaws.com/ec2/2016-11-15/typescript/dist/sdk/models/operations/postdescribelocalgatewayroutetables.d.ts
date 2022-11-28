import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeLocalGatewayRouteTablesActionEnum {
    DescribeLocalGatewayRouteTables = "DescribeLocalGatewayRouteTables"
}
export declare enum PostDescribeLocalGatewayRouteTablesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeLocalGatewayRouteTablesQueryParams extends SpeakeasyBase {
    action: PostDescribeLocalGatewayRouteTablesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeLocalGatewayRouteTablesVersionEnum;
}
export declare class PostDescribeLocalGatewayRouteTablesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLocalGatewayRouteTablesRequest extends SpeakeasyBase {
    queryParams: PostDescribeLocalGatewayRouteTablesQueryParams;
    headers: PostDescribeLocalGatewayRouteTablesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLocalGatewayRouteTablesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
