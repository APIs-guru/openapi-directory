import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAcceptTransitGatewayVpcAttachmentActionEnum {
    AcceptTransitGatewayVpcAttachment = "AcceptTransitGatewayVpcAttachment"
}
export declare enum PostAcceptTransitGatewayVpcAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAcceptTransitGatewayVpcAttachmentQueryParams extends SpeakeasyBase {
    action: PostAcceptTransitGatewayVpcAttachmentActionEnum;
    version: PostAcceptTransitGatewayVpcAttachmentVersionEnum;
}
export declare class PostAcceptTransitGatewayVpcAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAcceptTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
    queryParams: PostAcceptTransitGatewayVpcAttachmentQueryParams;
    headers: PostAcceptTransitGatewayVpcAttachmentHeaders;
    request?: Uint8Array;
}
export declare class PostAcceptTransitGatewayVpcAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
