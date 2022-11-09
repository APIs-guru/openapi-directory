import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRegisterTransitGatewayMulticastGroupMembersActionEnum {
    RegisterTransitGatewayMulticastGroupMembers = "RegisterTransitGatewayMulticastGroupMembers"
}
export declare enum GetRegisterTransitGatewayMulticastGroupMembersVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetRegisterTransitGatewayMulticastGroupMembersQueryParams extends SpeakeasyBase {
    action: GetRegisterTransitGatewayMulticastGroupMembersActionEnum;
    dryRun?: boolean;
    groupIpAddress?: string;
    networkInterfaceIds?: string[];
    transitGatewayMulticastDomainId?: string;
    version: GetRegisterTransitGatewayMulticastGroupMembersVersionEnum;
}
export declare class GetRegisterTransitGatewayMulticastGroupMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRegisterTransitGatewayMulticastGroupMembersRequest extends SpeakeasyBase {
    queryParams: GetRegisterTransitGatewayMulticastGroupMembersQueryParams;
    headers: GetRegisterTransitGatewayMulticastGroupMembersHeaders;
}
export declare class GetRegisterTransitGatewayMulticastGroupMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
