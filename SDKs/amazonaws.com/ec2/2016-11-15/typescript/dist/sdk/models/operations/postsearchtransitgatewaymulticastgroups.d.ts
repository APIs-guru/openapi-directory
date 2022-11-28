import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSearchTransitGatewayMulticastGroupsActionEnum {
    SearchTransitGatewayMulticastGroups = "SearchTransitGatewayMulticastGroups"
}
export declare enum PostSearchTransitGatewayMulticastGroupsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostSearchTransitGatewayMulticastGroupsQueryParams extends SpeakeasyBase {
    action: PostSearchTransitGatewayMulticastGroupsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostSearchTransitGatewayMulticastGroupsVersionEnum;
}
export declare class PostSearchTransitGatewayMulticastGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSearchTransitGatewayMulticastGroupsRequest extends SpeakeasyBase {
    queryParams: PostSearchTransitGatewayMulticastGroupsQueryParams;
    headers: PostSearchTransitGatewayMulticastGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostSearchTransitGatewayMulticastGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
