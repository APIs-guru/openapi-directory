import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRegisterTransitGatewayMulticastGroupMembersActionEnum {
    RegisterTransitGatewayMulticastGroupMembers = "RegisterTransitGatewayMulticastGroupMembers"
}
export declare enum PostRegisterTransitGatewayMulticastGroupMembersVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRegisterTransitGatewayMulticastGroupMembersQueryParams extends SpeakeasyBase {
    action: PostRegisterTransitGatewayMulticastGroupMembersActionEnum;
    version: PostRegisterTransitGatewayMulticastGroupMembersVersionEnum;
}
export declare class PostRegisterTransitGatewayMulticastGroupMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRegisterTransitGatewayMulticastGroupMembersRequest extends SpeakeasyBase {
    queryParams: PostRegisterTransitGatewayMulticastGroupMembersQueryParams;
    headers: PostRegisterTransitGatewayMulticastGroupMembersHeaders;
    request?: Uint8Array;
}
export declare class PostRegisterTransitGatewayMulticastGroupMembersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
