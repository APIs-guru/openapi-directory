import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRejectTransitGatewayPeeringAttachmentActionEnum {
    RejectTransitGatewayPeeringAttachment = "RejectTransitGatewayPeeringAttachment"
}
export declare enum PostRejectTransitGatewayPeeringAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRejectTransitGatewayPeeringAttachmentQueryParams extends SpeakeasyBase {
    action: PostRejectTransitGatewayPeeringAttachmentActionEnum;
    version: PostRejectTransitGatewayPeeringAttachmentVersionEnum;
}
export declare class PostRejectTransitGatewayPeeringAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRejectTransitGatewayPeeringAttachmentRequest extends SpeakeasyBase {
    queryParams: PostRejectTransitGatewayPeeringAttachmentQueryParams;
    headers: PostRejectTransitGatewayPeeringAttachmentHeaders;
    request?: Uint8Array;
}
export declare class PostRejectTransitGatewayPeeringAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
