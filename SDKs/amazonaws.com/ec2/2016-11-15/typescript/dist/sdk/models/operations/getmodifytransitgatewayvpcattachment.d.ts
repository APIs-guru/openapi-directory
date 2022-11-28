import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetModifyTransitGatewayVpcAttachmentActionEnum {
    ModifyTransitGatewayVpcAttachment = "ModifyTransitGatewayVpcAttachment"
}
/**
 * Describes the options for a VPC attachment.
**/
export declare class GetModifyTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
    applianceModeSupport?: shared.ApplianceModeSupportValueEnum;
    dnsSupport?: shared.DnsSupportValueEnum;
    ipv6Support?: shared.Ipv6SupportValueEnum;
}
export declare enum GetModifyTransitGatewayVpcAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyTransitGatewayVpcAttachmentQueryParams extends SpeakeasyBase {
    action: GetModifyTransitGatewayVpcAttachmentActionEnum;
    addSubnetIds?: string[];
    dryRun?: boolean;
    options?: GetModifyTransitGatewayVpcAttachmentOptions;
    removeSubnetIds?: string[];
    transitGatewayAttachmentId: string;
    version: GetModifyTransitGatewayVpcAttachmentVersionEnum;
}
export declare class GetModifyTransitGatewayVpcAttachmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
    queryParams: GetModifyTransitGatewayVpcAttachmentQueryParams;
    headers: GetModifyTransitGatewayVpcAttachmentHeaders;
}
export declare class GetModifyTransitGatewayVpcAttachmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
