import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteTransitGatewayPeeringAttachmentActionEnum {
    DeleteTransitGatewayPeeringAttachment = "DeleteTransitGatewayPeeringAttachment"
}
export declare enum GetDeleteTransitGatewayPeeringAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteTransitGatewayPeeringAttachmentQueryParams extends SpeakeasyBase {
    action: GetDeleteTransitGatewayPeeringAttachmentActionEnum;
    dryRun?: boolean;
    transitGatewayAttachmentId: string;
    version: GetDeleteTransitGatewayPeeringAttachmentVersionEnum;
}
export declare class GetDeleteTransitGatewayPeeringAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteTransitGatewayPeeringAttachmentRequest extends SpeakeasyBase {
    queryParams: GetDeleteTransitGatewayPeeringAttachmentQueryParams;
    headers: GetDeleteTransitGatewayPeeringAttachmentHeaders;
}
export declare class GetDeleteTransitGatewayPeeringAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
