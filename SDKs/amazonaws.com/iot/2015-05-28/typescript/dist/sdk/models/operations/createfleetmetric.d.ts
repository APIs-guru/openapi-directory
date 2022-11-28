import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFleetMetricPathParams extends SpeakeasyBase {
    metricName: string;
}
export declare class CreateFleetMetricHeaders extends SpeakeasyBase {
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
export declare class CreateFleetMetricRequestBodyAggregationType extends SpeakeasyBase {
    name?: shared.AggregationTypeNameEnum;
    values?: string[];
}
export declare enum CreateFleetMetricRequestBodyUnitEnum {
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
export declare class CreateFleetMetricRequestBody extends SpeakeasyBase {
    aggregationField: string;
    aggregationType: CreateFleetMetricRequestBodyAggregationType;
    description?: string;
    indexName?: string;
    period: number;
    queryString: string;
    queryVersion?: string;
    tags?: shared.Tag[];
    unit?: CreateFleetMetricRequestBodyUnitEnum;
}
export declare class CreateFleetMetricRequest extends SpeakeasyBase {
    pathParams: CreateFleetMetricPathParams;
    headers: CreateFleetMetricHeaders;
    request: CreateFleetMetricRequestBody;
}
export declare class CreateFleetMetricResponse extends SpeakeasyBase {
    contentType: string;
    createFleetMetricResponse?: shared.CreateFleetMetricResponse;
    indexNotReadyException?: any;
    internalFailureException?: any;
    invalidAggregationException?: any;
    invalidQueryException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
