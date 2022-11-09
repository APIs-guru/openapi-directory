import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeVpcEndpointConnectionsActionEnum {
    DescribeVpcEndpointConnections = "DescribeVpcEndpointConnections"
}
export declare enum PostDescribeVpcEndpointConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVpcEndpointConnectionsQueryParams extends SpeakeasyBase {
    action: PostDescribeVpcEndpointConnectionsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeVpcEndpointConnectionsVersionEnum;
}
export declare class PostDescribeVpcEndpointConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVpcEndpointConnectionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeVpcEndpointConnectionsQueryParams;
    headers: PostDescribeVpcEndpointConnectionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVpcEndpointConnectionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
