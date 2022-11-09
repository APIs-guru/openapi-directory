import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAssociateTransitGatewayMulticastDomainActionEnum {
    AssociateTransitGatewayMulticastDomain = "AssociateTransitGatewayMulticastDomain"
}
export declare enum PostAssociateTransitGatewayMulticastDomainVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAssociateTransitGatewayMulticastDomainQueryParams extends SpeakeasyBase {
    action: PostAssociateTransitGatewayMulticastDomainActionEnum;
    version: PostAssociateTransitGatewayMulticastDomainVersionEnum;
}
export declare class PostAssociateTransitGatewayMulticastDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssociateTransitGatewayMulticastDomainRequest extends SpeakeasyBase {
    queryParams: PostAssociateTransitGatewayMulticastDomainQueryParams;
    headers: PostAssociateTransitGatewayMulticastDomainHeaders;
    request?: Uint8Array;
}
export declare class PostAssociateTransitGatewayMulticastDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
