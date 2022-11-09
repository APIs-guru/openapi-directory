import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateTransitGatewayMulticastDomainActionEnum {
    CreateTransitGatewayMulticastDomain = "CreateTransitGatewayMulticastDomain"
}
export declare enum PostCreateTransitGatewayMulticastDomainVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateTransitGatewayMulticastDomainQueryParams extends SpeakeasyBase {
    action: PostCreateTransitGatewayMulticastDomainActionEnum;
    version: PostCreateTransitGatewayMulticastDomainVersionEnum;
}
export declare class PostCreateTransitGatewayMulticastDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateTransitGatewayMulticastDomainRequest extends SpeakeasyBase {
    queryParams: PostCreateTransitGatewayMulticastDomainQueryParams;
    headers: PostCreateTransitGatewayMulticastDomainHeaders;
    request?: Uint8Array;
}
export declare class PostCreateTransitGatewayMulticastDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
