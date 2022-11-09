import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAssociateTransitGatewayMulticastDomainActionEnum {
    AssociateTransitGatewayMulticastDomain = "AssociateTransitGatewayMulticastDomain"
}
export declare enum GetAssociateTransitGatewayMulticastDomainVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAssociateTransitGatewayMulticastDomainQueryParams extends SpeakeasyBase {
    action: GetAssociateTransitGatewayMulticastDomainActionEnum;
    dryRun?: boolean;
    subnetIds?: string[];
    transitGatewayAttachmentId?: string;
    transitGatewayMulticastDomainId?: string;
    version: GetAssociateTransitGatewayMulticastDomainVersionEnum;
}
export declare class GetAssociateTransitGatewayMulticastDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociateTransitGatewayMulticastDomainRequest extends SpeakeasyBase {
    queryParams: GetAssociateTransitGatewayMulticastDomainQueryParams;
    headers: GetAssociateTransitGatewayMulticastDomainHeaders;
}
export declare class GetAssociateTransitGatewayMulticastDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
