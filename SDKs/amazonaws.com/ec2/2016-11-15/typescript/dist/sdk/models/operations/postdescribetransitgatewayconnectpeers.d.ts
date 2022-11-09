import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeTransitGatewayConnectPeersActionEnum {
    DescribeTransitGatewayConnectPeers = "DescribeTransitGatewayConnectPeers"
}
export declare enum PostDescribeTransitGatewayConnectPeersVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeTransitGatewayConnectPeersQueryParams extends SpeakeasyBase {
    action: PostDescribeTransitGatewayConnectPeersActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeTransitGatewayConnectPeersVersionEnum;
}
export declare class PostDescribeTransitGatewayConnectPeersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTransitGatewayConnectPeersRequest extends SpeakeasyBase {
    queryParams: PostDescribeTransitGatewayConnectPeersQueryParams;
    headers: PostDescribeTransitGatewayConnectPeersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTransitGatewayConnectPeersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
