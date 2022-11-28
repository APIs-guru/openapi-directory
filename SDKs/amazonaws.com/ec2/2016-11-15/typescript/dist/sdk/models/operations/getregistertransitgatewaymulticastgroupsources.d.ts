import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRegisterTransitGatewayMulticastGroupSourcesActionEnum {
    RegisterTransitGatewayMulticastGroupSources = "RegisterTransitGatewayMulticastGroupSources"
}
export declare enum GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetRegisterTransitGatewayMulticastGroupSourcesQueryParams extends SpeakeasyBase {
    action: GetRegisterTransitGatewayMulticastGroupSourcesActionEnum;
    dryRun?: boolean;
    groupIpAddress?: string;
    networkInterfaceIds?: string[];
    transitGatewayMulticastDomainId?: string;
    version: GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum;
}
export declare class GetRegisterTransitGatewayMulticastGroupSourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRegisterTransitGatewayMulticastGroupSourcesRequest extends SpeakeasyBase {
    queryParams: GetRegisterTransitGatewayMulticastGroupSourcesQueryParams;
    headers: GetRegisterTransitGatewayMulticastGroupSourcesHeaders;
}
export declare class GetRegisterTransitGatewayMulticastGroupSourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
