import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAcceptTransitGatewayMulticastDomainAssociationsActionEnum {
    AcceptTransitGatewayMulticastDomainAssociations = "AcceptTransitGatewayMulticastDomainAssociations"
}
export declare enum GetAcceptTransitGatewayMulticastDomainAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams extends SpeakeasyBase {
    action: GetAcceptTransitGatewayMulticastDomainAssociationsActionEnum;
    dryRun?: boolean;
    subnetIds?: string[];
    transitGatewayAttachmentId?: string;
    transitGatewayMulticastDomainId?: string;
    version: GetAcceptTransitGatewayMulticastDomainAssociationsVersionEnum;
}
export declare class GetAcceptTransitGatewayMulticastDomainAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAcceptTransitGatewayMulticastDomainAssociationsRequest extends SpeakeasyBase {
    queryParams: GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams;
    headers: GetAcceptTransitGatewayMulticastDomainAssociationsHeaders;
}
export declare class GetAcceptTransitGatewayMulticastDomainAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
