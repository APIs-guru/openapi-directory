import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateTransitGatewayPeeringAttachmentActionEnum {
    CreateTransitGatewayPeeringAttachment = "CreateTransitGatewayPeeringAttachment"
}
export declare enum PostCreateTransitGatewayPeeringAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateTransitGatewayPeeringAttachmentQueryParams extends SpeakeasyBase {
    action: PostCreateTransitGatewayPeeringAttachmentActionEnum;
    version: PostCreateTransitGatewayPeeringAttachmentVersionEnum;
}
export declare class PostCreateTransitGatewayPeeringAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateTransitGatewayPeeringAttachmentRequest extends SpeakeasyBase {
    queryParams: PostCreateTransitGatewayPeeringAttachmentQueryParams;
    headers: PostCreateTransitGatewayPeeringAttachmentHeaders;
    request?: Uint8Array;
}
export declare class PostCreateTransitGatewayPeeringAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
