import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCancelSpotFleetRequestsActionEnum {
    CancelSpotFleetRequests = "CancelSpotFleetRequests"
}
export declare enum GetCancelSpotFleetRequestsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCancelSpotFleetRequestsQueryParams extends SpeakeasyBase {
    action: GetCancelSpotFleetRequestsActionEnum;
    dryRun?: boolean;
    spotFleetRequestId: string[];
    terminateInstances: boolean;
    version: GetCancelSpotFleetRequestsVersionEnum;
}
export declare class GetCancelSpotFleetRequestsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCancelSpotFleetRequestsRequest extends SpeakeasyBase {
    queryParams: GetCancelSpotFleetRequestsQueryParams;
    headers: GetCancelSpotFleetRequestsHeaders;
}
export declare class GetCancelSpotFleetRequestsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
