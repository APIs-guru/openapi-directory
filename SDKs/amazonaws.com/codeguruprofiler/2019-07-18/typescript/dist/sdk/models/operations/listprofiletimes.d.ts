import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProfileTimesPathParams extends SpeakeasyBase {
    profilingGroupName: string;
}
export declare enum ListProfileTimesOrderByEnum {
    TimestampDescending = "TimestampDescending",
    TimestampAscending = "TimestampAscending"
}
export declare enum ListProfileTimesPeriodEnum {
    Pt5M = "PT5M",
    Pt1H = "PT1H",
    P1D = "P1D"
}
export declare class ListProfileTimesQueryParams extends SpeakeasyBase {
    endTime: Date;
    maxResults?: number;
    nextToken?: string;
    orderBy?: ListProfileTimesOrderByEnum;
    period: ListProfileTimesPeriodEnum;
    startTime: Date;
}
export declare class ListProfileTimesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListProfileTimesRequest extends SpeakeasyBase {
    pathParams: ListProfileTimesPathParams;
    queryParams: ListProfileTimesQueryParams;
    headers: ListProfileTimesHeaders;
}
export declare class ListProfileTimesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listProfileTimesResponse?: shared.ListProfileTimesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
