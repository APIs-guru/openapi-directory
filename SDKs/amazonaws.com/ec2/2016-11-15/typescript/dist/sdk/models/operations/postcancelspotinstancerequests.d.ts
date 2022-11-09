import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCancelSpotInstanceRequestsActionEnum {
    CancelSpotInstanceRequests = "CancelSpotInstanceRequests"
}
export declare enum PostCancelSpotInstanceRequestsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCancelSpotInstanceRequestsQueryParams extends SpeakeasyBase {
    action: PostCancelSpotInstanceRequestsActionEnum;
    version: PostCancelSpotInstanceRequestsVersionEnum;
}
export declare class PostCancelSpotInstanceRequestsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCancelSpotInstanceRequestsRequest extends SpeakeasyBase {
    queryParams: PostCancelSpotInstanceRequestsQueryParams;
    headers: PostCancelSpotInstanceRequestsHeaders;
    request?: Uint8Array;
}
export declare class PostCancelSpotInstanceRequestsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
