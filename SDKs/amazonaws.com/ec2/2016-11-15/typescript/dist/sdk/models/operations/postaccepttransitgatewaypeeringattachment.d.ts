import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAcceptTransitGatewayPeeringAttachmentActionEnum {
    AcceptTransitGatewayPeeringAttachment = "AcceptTransitGatewayPeeringAttachment"
}
export declare enum PostAcceptTransitGatewayPeeringAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAcceptTransitGatewayPeeringAttachmentQueryParams extends SpeakeasyBase {
    action: PostAcceptTransitGatewayPeeringAttachmentActionEnum;
    version: PostAcceptTransitGatewayPeeringAttachmentVersionEnum;
}
export declare class PostAcceptTransitGatewayPeeringAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAcceptTransitGatewayPeeringAttachmentRequest extends SpeakeasyBase {
    queryParams: PostAcceptTransitGatewayPeeringAttachmentQueryParams;
    headers: PostAcceptTransitGatewayPeeringAttachmentHeaders;
    request?: Uint8Array;
}
export declare class PostAcceptTransitGatewayPeeringAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
