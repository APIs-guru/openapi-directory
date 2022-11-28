import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteTransitGatewayPeeringAttachmentActionEnum {
    DeleteTransitGatewayPeeringAttachment = "DeleteTransitGatewayPeeringAttachment"
}
export declare enum PostDeleteTransitGatewayPeeringAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteTransitGatewayPeeringAttachmentQueryParams extends SpeakeasyBase {
    action: PostDeleteTransitGatewayPeeringAttachmentActionEnum;
    version: PostDeleteTransitGatewayPeeringAttachmentVersionEnum;
}
export declare class PostDeleteTransitGatewayPeeringAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTransitGatewayPeeringAttachmentRequest extends SpeakeasyBase {
    queryParams: PostDeleteTransitGatewayPeeringAttachmentQueryParams;
    headers: PostDeleteTransitGatewayPeeringAttachmentHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTransitGatewayPeeringAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
