import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeSpotFleetInstancesActionEnum {
    DescribeSpotFleetInstances = "DescribeSpotFleetInstances"
}
export declare enum GetDescribeSpotFleetInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeSpotFleetInstancesQueryParams extends SpeakeasyBase {
    action: GetDescribeSpotFleetInstancesActionEnum;
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    spotFleetRequestId: string;
    version: GetDescribeSpotFleetInstancesVersionEnum;
}
export declare class GetDescribeSpotFleetInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeSpotFleetInstancesRequest extends SpeakeasyBase {
    queryParams: GetDescribeSpotFleetInstancesQueryParams;
    headers: GetDescribeSpotFleetInstancesHeaders;
}
export declare class GetDescribeSpotFleetInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
