import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateFleetMetricPathParams extends SpeakeasyBase {
    metricName: string;
}
export declare class UpdateFleetMetricHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The type of aggregation queries.
**/
export declare class UpdateFleetMetricRequestBodyAggregationType extends SpeakeasyBase {
    name?: shared.AggregationTypeNameEnum;
    values?: string[];
}
export declare enum UpdateFleetMetricRequestBodyUnitEnum {
    Seconds = "Seconds",
    Microseconds = "Microseconds",
    Milliseconds = "Milliseconds",
    Bytes = "Bytes",
    Kilobytes = "Kilobytes",
    Megabytes = "Megabytes",
    Gigabytes = "Gigabytes",
    Terabytes = "Terabytes",
    Bits = "Bits",
    Kilobits = "Kilobits",
    Megabits = "Megabits",
    Gigabits = "Gigabits",
    Terabits = "Terabits",
    Percent = "Percent",
    Count = "Count",
    BytesSecond = "Bytes/Second",
    KilobytesSecond = "Kilobytes/Second",
    MegabytesSecond = "Megabytes/Second",
    GigabytesSecond = "Gigabytes/Second",
    TerabytesSecond = "Terabytes/Second",
    BitsSecond = "Bits/Second",
    KilobitsSecond = "Kilobits/Second",
    MegabitsSecond = "Megabits/Second",
    GigabitsSecond = "Gigabits/Second",
    TerabitsSecond = "Terabits/Second",
    CountSecond = "Count/Second",
    None = "None"
}
export declare class UpdateFleetMetricRequestBody extends SpeakeasyBase {
    aggregationField?: string;
    aggregationType?: UpdateFleetMetricRequestBodyAggregationType;
    description?: string;
    expectedVersion?: number;
    indexName: string;
    period?: number;
    queryString?: string;
    queryVersion?: string;
    unit?: UpdateFleetMetricRequestBodyUnitEnum;
}
export declare class UpdateFleetMetricRequest extends SpeakeasyBase {
    pathParams: UpdateFleetMetricPathParams;
    headers: UpdateFleetMetricHeaders;
    request: UpdateFleetMetricRequestBody;
}
export declare class UpdateFleetMetricResponse extends SpeakeasyBase {
    contentType: string;
    indexNotReadyException?: any;
    internalFailureException?: any;
    invalidAggregationException?: any;
    invalidQueryException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
    versionConflictException?: any;
}
