import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeregisterTransitGatewayMulticastGroupMembersActionEnum {
    DeregisterTransitGatewayMulticastGroupMembers = "DeregisterTransitGatewayMulticastGroupMembers"
}
export declare enum GetDeregisterTransitGatewayMulticastGroupMembersVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeregisterTransitGatewayMulticastGroupMembersQueryParams extends SpeakeasyBase {
    action: GetDeregisterTransitGatewayMulticastGroupMembersActionEnum;
    dryRun?: boolean;
    groupIpAddress?: string;
    networkInterfaceIds?: string[];
    transitGatewayMulticastDomainId?: string;
    version: GetDeregisterTransitGatewayMulticastGroupMembersVersionEnum;
}
export declare class GetDeregisterTransitGatewayMulticastGroupMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeregisterTransitGatewayMulticastGroupMembersRequest extends SpeakeasyBase {
    queryParams: GetDeregisterTransitGatewayMulticastGroupMembersQueryParams;
    headers: GetDeregisterTransitGatewayMulticastGroupMembersHeaders;
}
export declare class GetDeregisterTransitGatewayMulticastGroupMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
