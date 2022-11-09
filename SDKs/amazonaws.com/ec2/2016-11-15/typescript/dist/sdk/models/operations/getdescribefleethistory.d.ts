import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeFleetHistoryActionEnum {
    DescribeFleetHistory = "DescribeFleetHistory"
}
export declare enum GetDescribeFleetHistoryEventTypeEnum {
    InstanceChange = "instance-change",
    FleetChange = "fleet-change",
    ServiceError = "service-error"
}
export declare enum GetDescribeFleetHistoryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeFleetHistoryQueryParams extends SpeakeasyBase {
    action: GetDescribeFleetHistoryActionEnum;
    dryRun?: boolean;
    eventType?: GetDescribeFleetHistoryEventTypeEnum;
    fleetId: string;
    maxResults?: number;
    nextToken?: string;
    startTime: Date;
    version: GetDescribeFleetHistoryVersionEnum;
}
export declare class GetDescribeFleetHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeFleetHistoryRequest extends SpeakeasyBase {
    queryParams: GetDescribeFleetHistoryQueryParams;
    headers: GetDescribeFleetHistoryHeaders;
}
export declare class GetDescribeFleetHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
