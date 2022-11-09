import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAcceptTransitGatewayVpcAttachmentActionEnum {
    AcceptTransitGatewayVpcAttachment = "AcceptTransitGatewayVpcAttachment"
}
export declare enum GetAcceptTransitGatewayVpcAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAcceptTransitGatewayVpcAttachmentQueryParams extends SpeakeasyBase {
    action: GetAcceptTransitGatewayVpcAttachmentActionEnum;
    dryRun?: boolean;
    transitGatewayAttachmentId: string;
    version: GetAcceptTransitGatewayVpcAttachmentVersionEnum;
}
export declare class GetAcceptTransitGatewayVpcAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAcceptTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
    queryParams: GetAcceptTransitGatewayVpcAttachmentQueryParams;
    headers: GetAcceptTransitGatewayVpcAttachmentHeaders;
}
export declare class GetAcceptTransitGatewayVpcAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
