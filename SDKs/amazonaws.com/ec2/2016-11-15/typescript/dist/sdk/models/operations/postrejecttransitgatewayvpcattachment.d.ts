import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRejectTransitGatewayVpcAttachmentActionEnum {
    RejectTransitGatewayVpcAttachment = "RejectTransitGatewayVpcAttachment"
}
export declare enum PostRejectTransitGatewayVpcAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRejectTransitGatewayVpcAttachmentQueryParams extends SpeakeasyBase {
    action: PostRejectTransitGatewayVpcAttachmentActionEnum;
    version: PostRejectTransitGatewayVpcAttachmentVersionEnum;
}
export declare class PostRejectTransitGatewayVpcAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRejectTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
    queryParams: PostRejectTransitGatewayVpcAttachmentQueryParams;
    headers: PostRejectTransitGatewayVpcAttachmentHeaders;
    request?: Uint8Array;
}
export declare class PostRejectTransitGatewayVpcAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
