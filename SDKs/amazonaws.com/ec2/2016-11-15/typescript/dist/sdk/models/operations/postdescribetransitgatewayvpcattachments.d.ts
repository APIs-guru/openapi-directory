import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeTransitGatewayVpcAttachmentsActionEnum {
    DescribeTransitGatewayVpcAttachments = "DescribeTransitGatewayVpcAttachments"
}
export declare enum PostDescribeTransitGatewayVpcAttachmentsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeTransitGatewayVpcAttachmentsQueryParams extends SpeakeasyBase {
    action: PostDescribeTransitGatewayVpcAttachmentsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeTransitGatewayVpcAttachmentsVersionEnum;
}
export declare class PostDescribeTransitGatewayVpcAttachmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTransitGatewayVpcAttachmentsRequest extends SpeakeasyBase {
    queryParams: PostDescribeTransitGatewayVpcAttachmentsQueryParams;
    headers: PostDescribeTransitGatewayVpcAttachmentsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTransitGatewayVpcAttachmentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
