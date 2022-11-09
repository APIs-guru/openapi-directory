import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeSpotFleetRequestHistoryActionEnum {
    DescribeSpotFleetRequestHistory = "DescribeSpotFleetRequestHistory"
}
export declare enum GetDescribeSpotFleetRequestHistoryEventTypeEnum {
    InstanceChange = "instanceChange",
    FleetRequestChange = "fleetRequestChange",
    Error = "error",
    Information = "information"
}
export declare enum GetDescribeSpotFleetRequestHistoryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeSpotFleetRequestHistoryQueryParams extends SpeakeasyBase {
    action: GetDescribeSpotFleetRequestHistoryActionEnum;
    dryRun?: boolean;
    eventType?: GetDescribeSpotFleetRequestHistoryEventTypeEnum;
    maxResults?: number;
    nextToken?: string;
    spotFleetRequestId: string;
    startTime: Date;
    version: GetDescribeSpotFleetRequestHistoryVersionEnum;
}
export declare class GetDescribeSpotFleetRequestHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeSpotFleetRequestHistoryRequest extends SpeakeasyBase {
    queryParams: GetDescribeSpotFleetRequestHistoryQueryParams;
    headers: GetDescribeSpotFleetRequestHistoryHeaders;
}
export declare class GetDescribeSpotFleetRequestHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
