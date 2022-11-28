import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeTransitGatewayPeeringAttachmentsActionEnum {
    DescribeTransitGatewayPeeringAttachments = "DescribeTransitGatewayPeeringAttachments"
}
export declare enum PostDescribeTransitGatewayPeeringAttachmentsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeTransitGatewayPeeringAttachmentsQueryParams extends SpeakeasyBase {
    action: PostDescribeTransitGatewayPeeringAttachmentsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeTransitGatewayPeeringAttachmentsVersionEnum;
}
export declare class PostDescribeTransitGatewayPeeringAttachmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTransitGatewayPeeringAttachmentsRequest extends SpeakeasyBase {
    queryParams: PostDescribeTransitGatewayPeeringAttachmentsQueryParams;
    headers: PostDescribeTransitGatewayPeeringAttachmentsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTransitGatewayPeeringAttachmentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
