import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCancelSpotFleetRequestsActionEnum {
    CancelSpotFleetRequests = "CancelSpotFleetRequests"
}
export declare enum PostCancelSpotFleetRequestsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCancelSpotFleetRequestsQueryParams extends SpeakeasyBase {
    action: PostCancelSpotFleetRequestsActionEnum;
    version: PostCancelSpotFleetRequestsVersionEnum;
}
export declare class PostCancelSpotFleetRequestsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCancelSpotFleetRequestsRequest extends SpeakeasyBase {
    queryParams: PostCancelSpotFleetRequestsQueryParams;
    headers: PostCancelSpotFleetRequestsHeaders;
    request?: Uint8Array;
}
export declare class PostCancelSpotFleetRequestsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
