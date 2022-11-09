import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCancelSpotInstanceRequestsActionEnum {
    CancelSpotInstanceRequests = "CancelSpotInstanceRequests"
}
export declare enum GetCancelSpotInstanceRequestsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCancelSpotInstanceRequestsQueryParams extends SpeakeasyBase {
    action: GetCancelSpotInstanceRequestsActionEnum;
    dryRun?: boolean;
    spotInstanceRequestId: string[];
    version: GetCancelSpotInstanceRequestsVersionEnum;
}
export declare class GetCancelSpotInstanceRequestsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCancelSpotInstanceRequestsRequest extends SpeakeasyBase {
    queryParams: GetCancelSpotInstanceRequestsQueryParams;
    headers: GetCancelSpotInstanceRequestsHeaders;
}
export declare class GetCancelSpotInstanceRequestsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
