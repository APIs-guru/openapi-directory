import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeEventsActionEnum {
    DescribeEvents = "DescribeEvents"
}
export declare enum GetDescribeEventsSeverityEnum {
    Trace = "TRACE",
    Debug = "DEBUG",
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR",
    Fatal = "FATAL"
}
export declare enum GetDescribeEventsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDescribeEventsQueryParams extends SpeakeasyBase {
    action: GetDescribeEventsActionEnum;
    applicationName?: string;
    endTime?: Date;
    environmentId?: string;
    environmentName?: string;
    maxRecords?: number;
    nextToken?: string;
    platformArn?: string;
    requestId?: string;
    severity?: GetDescribeEventsSeverityEnum;
    startTime?: Date;
    templateName?: string;
    version: GetDescribeEventsVersionEnum;
    versionLabel?: string;
}
export declare class GetDescribeEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeEventsRequest extends SpeakeasyBase {
    queryParams: GetDescribeEventsQueryParams;
    headers: GetDescribeEventsHeaders;
}
export declare class GetDescribeEventsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
