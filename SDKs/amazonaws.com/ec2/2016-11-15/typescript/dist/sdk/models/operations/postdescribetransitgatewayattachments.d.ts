import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeTransitGatewayAttachmentsActionEnum {
    DescribeTransitGatewayAttachments = "DescribeTransitGatewayAttachments"
}
export declare enum PostDescribeTransitGatewayAttachmentsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeTransitGatewayAttachmentsQueryParams extends SpeakeasyBase {
    action: PostDescribeTransitGatewayAttachmentsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeTransitGatewayAttachmentsVersionEnum;
}
export declare class PostDescribeTransitGatewayAttachmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTransitGatewayAttachmentsRequest extends SpeakeasyBase {
    queryParams: PostDescribeTransitGatewayAttachmentsQueryParams;
    headers: PostDescribeTransitGatewayAttachmentsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTransitGatewayAttachmentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
