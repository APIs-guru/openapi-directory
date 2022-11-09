import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRegisterTransitGatewayMulticastGroupSourcesActionEnum {
    RegisterTransitGatewayMulticastGroupSources = "RegisterTransitGatewayMulticastGroupSources"
}
export declare enum PostRegisterTransitGatewayMulticastGroupSourcesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRegisterTransitGatewayMulticastGroupSourcesQueryParams extends SpeakeasyBase {
    action: PostRegisterTransitGatewayMulticastGroupSourcesActionEnum;
    version: PostRegisterTransitGatewayMulticastGroupSourcesVersionEnum;
}
export declare class PostRegisterTransitGatewayMulticastGroupSourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRegisterTransitGatewayMulticastGroupSourcesRequest extends SpeakeasyBase {
    queryParams: PostRegisterTransitGatewayMulticastGroupSourcesQueryParams;
    headers: PostRegisterTransitGatewayMulticastGroupSourcesHeaders;
    request?: Uint8Array;
}
export declare class PostRegisterTransitGatewayMulticastGroupSourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
