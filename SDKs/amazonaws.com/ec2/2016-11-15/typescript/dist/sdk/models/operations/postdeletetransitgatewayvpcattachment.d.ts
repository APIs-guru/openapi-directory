import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteTransitGatewayVpcAttachmentActionEnum {
    DeleteTransitGatewayVpcAttachment = "DeleteTransitGatewayVpcAttachment"
}
export declare enum PostDeleteTransitGatewayVpcAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteTransitGatewayVpcAttachmentQueryParams extends SpeakeasyBase {
    action: PostDeleteTransitGatewayVpcAttachmentActionEnum;
    version: PostDeleteTransitGatewayVpcAttachmentVersionEnum;
}
export declare class PostDeleteTransitGatewayVpcAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
    queryParams: PostDeleteTransitGatewayVpcAttachmentQueryParams;
    headers: PostDeleteTransitGatewayVpcAttachmentHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTransitGatewayVpcAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
