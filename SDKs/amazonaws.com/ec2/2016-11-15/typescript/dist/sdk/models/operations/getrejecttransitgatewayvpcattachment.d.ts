import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRejectTransitGatewayVpcAttachmentActionEnum {
    RejectTransitGatewayVpcAttachment = "RejectTransitGatewayVpcAttachment"
}
export declare enum GetRejectTransitGatewayVpcAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetRejectTransitGatewayVpcAttachmentQueryParams extends SpeakeasyBase {
    action: GetRejectTransitGatewayVpcAttachmentActionEnum;
    dryRun?: boolean;
    transitGatewayAttachmentId: string;
    version: GetRejectTransitGatewayVpcAttachmentVersionEnum;
}
export declare class GetRejectTransitGatewayVpcAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRejectTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
    queryParams: GetRejectTransitGatewayVpcAttachmentQueryParams;
    headers: GetRejectTransitGatewayVpcAttachmentHeaders;
}
export declare class GetRejectTransitGatewayVpcAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
