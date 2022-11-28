import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAcceptTransitGatewayMulticastDomainAssociationsActionEnum {
    AcceptTransitGatewayMulticastDomainAssociations = "AcceptTransitGatewayMulticastDomainAssociations"
}
export declare enum PostAcceptTransitGatewayMulticastDomainAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAcceptTransitGatewayMulticastDomainAssociationsQueryParams extends SpeakeasyBase {
    action: PostAcceptTransitGatewayMulticastDomainAssociationsActionEnum;
    version: PostAcceptTransitGatewayMulticastDomainAssociationsVersionEnum;
}
export declare class PostAcceptTransitGatewayMulticastDomainAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAcceptTransitGatewayMulticastDomainAssociationsRequest extends SpeakeasyBase {
    queryParams: PostAcceptTransitGatewayMulticastDomainAssociationsQueryParams;
    headers: PostAcceptTransitGatewayMulticastDomainAssociationsHeaders;
    request?: Uint8Array;
}
export declare class PostAcceptTransitGatewayMulticastDomainAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
