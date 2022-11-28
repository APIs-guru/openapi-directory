import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteTransitGatewayMulticastDomainActionEnum {
    DeleteTransitGatewayMulticastDomain = "DeleteTransitGatewayMulticastDomain"
}
export declare enum PostDeleteTransitGatewayMulticastDomainVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteTransitGatewayMulticastDomainQueryParams extends SpeakeasyBase {
    action: PostDeleteTransitGatewayMulticastDomainActionEnum;
    version: PostDeleteTransitGatewayMulticastDomainVersionEnum;
}
export declare class PostDeleteTransitGatewayMulticastDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTransitGatewayMulticastDomainRequest extends SpeakeasyBase {
    queryParams: PostDeleteTransitGatewayMulticastDomainQueryParams;
    headers: PostDeleteTransitGatewayMulticastDomainHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTransitGatewayMulticastDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
