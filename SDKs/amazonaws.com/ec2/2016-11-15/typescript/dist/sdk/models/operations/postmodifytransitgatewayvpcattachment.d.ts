import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyTransitGatewayVpcAttachmentActionEnum {
    ModifyTransitGatewayVpcAttachment = "ModifyTransitGatewayVpcAttachment"
}
export declare enum PostModifyTransitGatewayVpcAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyTransitGatewayVpcAttachmentQueryParams extends SpeakeasyBase {
    action: PostModifyTransitGatewayVpcAttachmentActionEnum;
    version: PostModifyTransitGatewayVpcAttachmentVersionEnum;
}
export declare class PostModifyTransitGatewayVpcAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
    queryParams: PostModifyTransitGatewayVpcAttachmentQueryParams;
    headers: PostModifyTransitGatewayVpcAttachmentHeaders;
    request?: Uint8Array;
}
export declare class PostModifyTransitGatewayVpcAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
