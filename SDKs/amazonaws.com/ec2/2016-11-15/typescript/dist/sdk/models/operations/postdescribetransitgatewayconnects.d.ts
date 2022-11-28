import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeTransitGatewayConnectsActionEnum {
    DescribeTransitGatewayConnects = "DescribeTransitGatewayConnects"
}
export declare enum PostDescribeTransitGatewayConnectsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeTransitGatewayConnectsQueryParams extends SpeakeasyBase {
    action: PostDescribeTransitGatewayConnectsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeTransitGatewayConnectsVersionEnum;
}
export declare class PostDescribeTransitGatewayConnectsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTransitGatewayConnectsRequest extends SpeakeasyBase {
    queryParams: PostDescribeTransitGatewayConnectsQueryParams;
    headers: PostDescribeTransitGatewayConnectsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTransitGatewayConnectsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
