import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteTransitGatewayVpcAttachmentActionEnum {
    DeleteTransitGatewayVpcAttachment = "DeleteTransitGatewayVpcAttachment"
}
export declare enum GetDeleteTransitGatewayVpcAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteTransitGatewayVpcAttachmentQueryParams extends SpeakeasyBase {
    action: GetDeleteTransitGatewayVpcAttachmentActionEnum;
    dryRun?: boolean;
    transitGatewayAttachmentId: string;
    version: GetDeleteTransitGatewayVpcAttachmentVersionEnum;
}
export declare class GetDeleteTransitGatewayVpcAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
    queryParams: GetDeleteTransitGatewayVpcAttachmentQueryParams;
    headers: GetDeleteTransitGatewayVpcAttachmentHeaders;
}
export declare class GetDeleteTransitGatewayVpcAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
