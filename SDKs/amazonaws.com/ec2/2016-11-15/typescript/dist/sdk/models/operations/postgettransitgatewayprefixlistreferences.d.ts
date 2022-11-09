import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetTransitGatewayPrefixListReferencesActionEnum {
    GetTransitGatewayPrefixListReferences = "GetTransitGatewayPrefixListReferences"
}
export declare enum PostGetTransitGatewayPrefixListReferencesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetTransitGatewayPrefixListReferencesQueryParams extends SpeakeasyBase {
    action: PostGetTransitGatewayPrefixListReferencesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostGetTransitGatewayPrefixListReferencesVersionEnum;
}
export declare class PostGetTransitGatewayPrefixListReferencesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetTransitGatewayPrefixListReferencesRequest extends SpeakeasyBase {
    queryParams: PostGetTransitGatewayPrefixListReferencesQueryParams;
    headers: PostGetTransitGatewayPrefixListReferencesHeaders;
    request?: Uint8Array;
}
export declare class PostGetTransitGatewayPrefixListReferencesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
