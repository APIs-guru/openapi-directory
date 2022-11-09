import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeVpnConnectionsActionEnum {
    DescribeVpnConnections = "DescribeVpnConnections"
}
export declare enum PostDescribeVpnConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVpnConnectionsQueryParams extends SpeakeasyBase {
    action: PostDescribeVpnConnectionsActionEnum;
    version: PostDescribeVpnConnectionsVersionEnum;
}
export declare class PostDescribeVpnConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVpnConnectionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeVpnConnectionsQueryParams;
    headers: PostDescribeVpnConnectionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVpnConnectionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
