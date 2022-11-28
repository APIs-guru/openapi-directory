import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteTransitGatewayMulticastDomainActionEnum {
    DeleteTransitGatewayMulticastDomain = "DeleteTransitGatewayMulticastDomain"
}
export declare enum GetDeleteTransitGatewayMulticastDomainVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteTransitGatewayMulticastDomainQueryParams extends SpeakeasyBase {
    action: GetDeleteTransitGatewayMulticastDomainActionEnum;
    dryRun?: boolean;
    transitGatewayMulticastDomainId: string;
    version: GetDeleteTransitGatewayMulticastDomainVersionEnum;
}
export declare class GetDeleteTransitGatewayMulticastDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteTransitGatewayMulticastDomainRequest extends SpeakeasyBase {
    queryParams: GetDeleteTransitGatewayMulticastDomainQueryParams;
    headers: GetDeleteTransitGatewayMulticastDomainHeaders;
}
export declare class GetDeleteTransitGatewayMulticastDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
