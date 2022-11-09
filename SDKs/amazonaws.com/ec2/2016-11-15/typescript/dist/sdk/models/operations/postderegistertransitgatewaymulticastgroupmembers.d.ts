import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeregisterTransitGatewayMulticastGroupMembersActionEnum {
    DeregisterTransitGatewayMulticastGroupMembers = "DeregisterTransitGatewayMulticastGroupMembers"
}
export declare enum PostDeregisterTransitGatewayMulticastGroupMembersVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeregisterTransitGatewayMulticastGroupMembersQueryParams extends SpeakeasyBase {
    action: PostDeregisterTransitGatewayMulticastGroupMembersActionEnum;
    version: PostDeregisterTransitGatewayMulticastGroupMembersVersionEnum;
}
export declare class PostDeregisterTransitGatewayMulticastGroupMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeregisterTransitGatewayMulticastGroupMembersRequest extends SpeakeasyBase {
    queryParams: PostDeregisterTransitGatewayMulticastGroupMembersQueryParams;
    headers: PostDeregisterTransitGatewayMulticastGroupMembersHeaders;
    request?: Uint8Array;
}
export declare class PostDeregisterTransitGatewayMulticastGroupMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
