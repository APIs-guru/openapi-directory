import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetTransitGatewayAttachmentPropagationsActionEnum {
    GetTransitGatewayAttachmentPropagations = "GetTransitGatewayAttachmentPropagations"
}
export declare enum PostGetTransitGatewayAttachmentPropagationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetTransitGatewayAttachmentPropagationsQueryParams extends SpeakeasyBase {
    action: PostGetTransitGatewayAttachmentPropagationsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostGetTransitGatewayAttachmentPropagationsVersionEnum;
}
export declare class PostGetTransitGatewayAttachmentPropagationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetTransitGatewayAttachmentPropagationsRequest extends SpeakeasyBase {
    queryParams: PostGetTransitGatewayAttachmentPropagationsQueryParams;
    headers: PostGetTransitGatewayAttachmentPropagationsHeaders;
    request?: Uint8Array;
}
export declare class PostGetTransitGatewayAttachmentPropagationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
