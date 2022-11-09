import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeRouteTablesActionEnum {
    DescribeRouteTables = "DescribeRouteTables"
}
export declare enum PostDescribeRouteTablesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeRouteTablesQueryParams extends SpeakeasyBase {
    action: PostDescribeRouteTablesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeRouteTablesVersionEnum;
}
export declare class PostDescribeRouteTablesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeRouteTablesRequest extends SpeakeasyBase {
    queryParams: PostDescribeRouteTablesQueryParams;
    headers: PostDescribeRouteTablesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeRouteTablesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
