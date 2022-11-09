import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetTransitGatewayMulticastDomainAssociationsActionEnum {
    GetTransitGatewayMulticastDomainAssociations = "GetTransitGatewayMulticastDomainAssociations"
}
export declare enum PostGetTransitGatewayMulticastDomainAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetTransitGatewayMulticastDomainAssociationsQueryParams extends SpeakeasyBase {
    action: PostGetTransitGatewayMulticastDomainAssociationsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostGetTransitGatewayMulticastDomainAssociationsVersionEnum;
}
export declare class PostGetTransitGatewayMulticastDomainAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetTransitGatewayMulticastDomainAssociationsRequest extends SpeakeasyBase {
    queryParams: PostGetTransitGatewayMulticastDomainAssociationsQueryParams;
    headers: PostGetTransitGatewayMulticastDomainAssociationsHeaders;
    request?: Uint8Array;
}
export declare class PostGetTransitGatewayMulticastDomainAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
