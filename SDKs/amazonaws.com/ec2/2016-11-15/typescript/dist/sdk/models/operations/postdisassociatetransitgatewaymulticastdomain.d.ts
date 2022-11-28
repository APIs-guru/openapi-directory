import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDisassociateTransitGatewayMulticastDomainActionEnum {
    DisassociateTransitGatewayMulticastDomain = "DisassociateTransitGatewayMulticastDomain"
}
export declare enum PostDisassociateTransitGatewayMulticastDomainVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisassociateTransitGatewayMulticastDomainQueryParams extends SpeakeasyBase {
    action: PostDisassociateTransitGatewayMulticastDomainActionEnum;
    version: PostDisassociateTransitGatewayMulticastDomainVersionEnum;
}
export declare class PostDisassociateTransitGatewayMulticastDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisassociateTransitGatewayMulticastDomainRequest extends SpeakeasyBase {
    queryParams: PostDisassociateTransitGatewayMulticastDomainQueryParams;
    headers: PostDisassociateTransitGatewayMulticastDomainHeaders;
    request?: Uint8Array;
}
export declare class PostDisassociateTransitGatewayMulticastDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
