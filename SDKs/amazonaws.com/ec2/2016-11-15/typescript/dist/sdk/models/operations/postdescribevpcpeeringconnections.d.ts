import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeVpcPeeringConnectionsActionEnum {
    DescribeVpcPeeringConnections = "DescribeVpcPeeringConnections"
}
export declare enum PostDescribeVpcPeeringConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVpcPeeringConnectionsQueryParams extends SpeakeasyBase {
    action: PostDescribeVpcPeeringConnectionsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeVpcPeeringConnectionsVersionEnum;
}
export declare class PostDescribeVpcPeeringConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVpcPeeringConnectionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeVpcPeeringConnectionsQueryParams;
    headers: PostDescribeVpcPeeringConnectionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVpcPeeringConnectionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
