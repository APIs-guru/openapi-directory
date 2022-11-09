import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeregisterTransitGatewayMulticastGroupSourcesActionEnum {
    DeregisterTransitGatewayMulticastGroupSources = "DeregisterTransitGatewayMulticastGroupSources"
}
export declare enum PostDeregisterTransitGatewayMulticastGroupSourcesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeregisterTransitGatewayMulticastGroupSourcesQueryParams extends SpeakeasyBase {
    action: PostDeregisterTransitGatewayMulticastGroupSourcesActionEnum;
    version: PostDeregisterTransitGatewayMulticastGroupSourcesVersionEnum;
}
export declare class PostDeregisterTransitGatewayMulticastGroupSourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeregisterTransitGatewayMulticastGroupSourcesRequest extends SpeakeasyBase {
    queryParams: PostDeregisterTransitGatewayMulticastGroupSourcesQueryParams;
    headers: PostDeregisterTransitGatewayMulticastGroupSourcesHeaders;
    request?: Uint8Array;
}
export declare class PostDeregisterTransitGatewayMulticastGroupSourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
