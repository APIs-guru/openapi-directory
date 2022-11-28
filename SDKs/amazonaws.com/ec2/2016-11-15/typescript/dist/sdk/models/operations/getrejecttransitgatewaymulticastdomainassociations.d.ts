import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRejectTransitGatewayMulticastDomainAssociationsActionEnum {
    RejectTransitGatewayMulticastDomainAssociations = "RejectTransitGatewayMulticastDomainAssociations"
}
export declare enum GetRejectTransitGatewayMulticastDomainAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetRejectTransitGatewayMulticastDomainAssociationsQueryParams extends SpeakeasyBase {
    action: GetRejectTransitGatewayMulticastDomainAssociationsActionEnum;
    dryRun?: boolean;
    subnetIds?: string[];
    transitGatewayAttachmentId?: string;
    transitGatewayMulticastDomainId?: string;
    version: GetRejectTransitGatewayMulticastDomainAssociationsVersionEnum;
}
export declare class GetRejectTransitGatewayMulticastDomainAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRejectTransitGatewayMulticastDomainAssociationsRequest extends SpeakeasyBase {
    queryParams: GetRejectTransitGatewayMulticastDomainAssociationsQueryParams;
    headers: GetRejectTransitGatewayMulticastDomainAssociationsHeaders;
}
export declare class GetRejectTransitGatewayMulticastDomainAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
