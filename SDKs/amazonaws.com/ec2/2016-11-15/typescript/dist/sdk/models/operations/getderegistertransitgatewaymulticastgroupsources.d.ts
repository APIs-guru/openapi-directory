import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeregisterTransitGatewayMulticastGroupSourcesActionEnum {
    DeregisterTransitGatewayMulticastGroupSources = "DeregisterTransitGatewayMulticastGroupSources"
}
export declare enum GetDeregisterTransitGatewayMulticastGroupSourcesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeregisterTransitGatewayMulticastGroupSourcesQueryParams extends SpeakeasyBase {
    action: GetDeregisterTransitGatewayMulticastGroupSourcesActionEnum;
    dryRun?: boolean;
    groupIpAddress?: string;
    networkInterfaceIds?: string[];
    transitGatewayMulticastDomainId?: string;
    version: GetDeregisterTransitGatewayMulticastGroupSourcesVersionEnum;
}
export declare class GetDeregisterTransitGatewayMulticastGroupSourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeregisterTransitGatewayMulticastGroupSourcesRequest extends SpeakeasyBase {
    queryParams: GetDeregisterTransitGatewayMulticastGroupSourcesQueryParams;
    headers: GetDeregisterTransitGatewayMulticastGroupSourcesHeaders;
}
export declare class GetDeregisterTransitGatewayMulticastGroupSourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
