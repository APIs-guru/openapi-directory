import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAcceptTransitGatewayPeeringAttachmentActionEnum {
    AcceptTransitGatewayPeeringAttachment = "AcceptTransitGatewayPeeringAttachment"
}
export declare enum GetAcceptTransitGatewayPeeringAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAcceptTransitGatewayPeeringAttachmentQueryParams extends SpeakeasyBase {
    action: GetAcceptTransitGatewayPeeringAttachmentActionEnum;
    dryRun?: boolean;
    transitGatewayAttachmentId: string;
    version: GetAcceptTransitGatewayPeeringAttachmentVersionEnum;
}
export declare class GetAcceptTransitGatewayPeeringAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAcceptTransitGatewayPeeringAttachmentRequest extends SpeakeasyBase {
    queryParams: GetAcceptTransitGatewayPeeringAttachmentQueryParams;
    headers: GetAcceptTransitGatewayPeeringAttachmentHeaders;
}
export declare class GetAcceptTransitGatewayPeeringAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
