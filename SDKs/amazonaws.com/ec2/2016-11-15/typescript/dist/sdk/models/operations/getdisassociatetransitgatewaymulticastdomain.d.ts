import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDisassociateTransitGatewayMulticastDomainActionEnum {
    DisassociateTransitGatewayMulticastDomain = "DisassociateTransitGatewayMulticastDomain"
}
export declare enum GetDisassociateTransitGatewayMulticastDomainVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisassociateTransitGatewayMulticastDomainQueryParams extends SpeakeasyBase {
    action: GetDisassociateTransitGatewayMulticastDomainActionEnum;
    dryRun?: boolean;
    subnetIds?: string[];
    transitGatewayAttachmentId?: string;
    transitGatewayMulticastDomainId?: string;
    version: GetDisassociateTransitGatewayMulticastDomainVersionEnum;
}
export declare class GetDisassociateTransitGatewayMulticastDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisassociateTransitGatewayMulticastDomainRequest extends SpeakeasyBase {
    queryParams: GetDisassociateTransitGatewayMulticastDomainQueryParams;
    headers: GetDisassociateTransitGatewayMulticastDomainHeaders;
}
export declare class GetDisassociateTransitGatewayMulticastDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
