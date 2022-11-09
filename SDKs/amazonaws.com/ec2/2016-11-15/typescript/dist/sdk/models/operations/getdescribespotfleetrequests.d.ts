import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeSpotFleetRequestsActionEnum {
    DescribeSpotFleetRequests = "DescribeSpotFleetRequests"
}
export declare enum GetDescribeSpotFleetRequestsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeSpotFleetRequestsQueryParams extends SpeakeasyBase {
    action: GetDescribeSpotFleetRequestsActionEnum;
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    spotFleetRequestId?: string[];
    version: GetDescribeSpotFleetRequestsVersionEnum;
}
export declare class GetDescribeSpotFleetRequestsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeSpotFleetRequestsRequest extends SpeakeasyBase {
    queryParams: GetDescribeSpotFleetRequestsQueryParams;
    headers: GetDescribeSpotFleetRequestsHeaders;
}
export declare class GetDescribeSpotFleetRequestsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
