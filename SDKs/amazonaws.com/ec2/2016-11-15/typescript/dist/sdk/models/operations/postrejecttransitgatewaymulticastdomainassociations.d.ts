import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRejectTransitGatewayMulticastDomainAssociationsActionEnum {
    RejectTransitGatewayMulticastDomainAssociations = "RejectTransitGatewayMulticastDomainAssociations"
}
export declare enum PostRejectTransitGatewayMulticastDomainAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRejectTransitGatewayMulticastDomainAssociationsQueryParams extends SpeakeasyBase {
    action: PostRejectTransitGatewayMulticastDomainAssociationsActionEnum;
    version: PostRejectTransitGatewayMulticastDomainAssociationsVersionEnum;
}
export declare class PostRejectTransitGatewayMulticastDomainAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRejectTransitGatewayMulticastDomainAssociationsRequest extends SpeakeasyBase {
    queryParams: PostRejectTransitGatewayMulticastDomainAssociationsQueryParams;
    headers: PostRejectTransitGatewayMulticastDomainAssociationsHeaders;
    request?: Uint8Array;
}
export declare class PostRejectTransitGatewayMulticastDomainAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
