import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateFleetMetricPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metricName" })
  metricName: string;
}


export class UpdateFleetMetricHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateFleetMetricRequestBodyAggregationType
/** 
 * The type of aggregation queries.
**/
export class UpdateFleetMetricRequestBodyAggregationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: shared.AggregationTypeNameEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}

export enum UpdateFleetMetricRequestBodyUnitEnum {
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


export class UpdateFleetMetricRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationField" })
  aggregationField?: string;

  @SpeakeasyMetadata({ data: "json, name=aggregationType" })
  aggregationType?: UpdateFleetMetricRequestBodyAggregationType;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expectedVersion" })
  expectedVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=indexName" })
  indexName: string;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: number;

  @SpeakeasyMetadata({ data: "json, name=queryString" })
  queryString?: string;

  @SpeakeasyMetadata({ data: "json, name=queryVersion" })
  queryVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: UpdateFleetMetricRequestBodyUnitEnum;
}


export class UpdateFleetMetricRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateFleetMetricPathParams;

  @SpeakeasyMetadata()
  headers: UpdateFleetMetricHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateFleetMetricRequestBody;
}


export class UpdateFleetMetricResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  indexNotReadyException?: any;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidAggregationException?: any;

  @SpeakeasyMetadata()
  invalidQueryException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  versionConflictException?: any;
}
