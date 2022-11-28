import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeClientVpnConnectionsActionEnum {
    DescribeClientVpnConnections = "DescribeClientVpnConnections"
}
export declare enum PostDescribeClientVpnConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeClientVpnConnectionsQueryParams extends SpeakeasyBase {
    action: PostDescribeClientVpnConnectionsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeClientVpnConnectionsVersionEnum;
}
export declare class PostDescribeClientVpnConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeClientVpnConnectionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeClientVpnConnectionsQueryParams;
    headers: PostDescribeClientVpnConnectionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeClientVpnConnectionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
