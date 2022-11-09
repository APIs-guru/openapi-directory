import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRejectTransitGatewayPeeringAttachmentActionEnum {
    RejectTransitGatewayPeeringAttachment = "RejectTransitGatewayPeeringAttachment"
}
export declare enum GetRejectTransitGatewayPeeringAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetRejectTransitGatewayPeeringAttachmentQueryParams extends SpeakeasyBase {
    action: GetRejectTransitGatewayPeeringAttachmentActionEnum;
    dryRun?: boolean;
    transitGatewayAttachmentId: string;
    version: GetRejectTransitGatewayPeeringAttachmentVersionEnum;
}
export declare class GetRejectTransitGatewayPeeringAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRejectTransitGatewayPeeringAttachmentRequest extends SpeakeasyBase {
    queryParams: GetRejectTransitGatewayPeeringAttachmentQueryParams;
    headers: GetRejectTransitGatewayPeeringAttachmentHeaders;
}
export declare class GetRejectTransitGatewayPeeringAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
