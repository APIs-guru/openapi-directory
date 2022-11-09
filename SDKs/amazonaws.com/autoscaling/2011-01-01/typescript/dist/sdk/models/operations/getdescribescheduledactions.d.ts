import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeScheduledActionsActionEnum {
    DescribeScheduledActions = "DescribeScheduledActions"
}
export declare enum GetDescribeScheduledActionsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeScheduledActionsQueryParams extends SpeakeasyBase {
    action: GetDescribeScheduledActionsActionEnum;
    autoScalingGroupName?: string;
    endTime?: Date;
    maxRecords?: number;
    nextToken?: string;
    scheduledActionNames?: string[];
    startTime?: Date;
    version: GetDescribeScheduledActionsVersionEnum;
}
export declare class GetDescribeScheduledActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeScheduledActionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeScheduledActionsQueryParams;
    headers: GetDescribeScheduledActionsHeaders;
}
export declare class GetDescribeScheduledActionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
