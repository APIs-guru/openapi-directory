import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFleetMetricPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=metricName" })
  metricName: string;
}


export class CreateFleetMetricHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateFleetMetricRequestBodyAggregationType
/** 
 * The type of aggregation queries.
**/
export class CreateFleetMetricRequestBodyAggregationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: shared.AggregationTypeNameEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}

export enum CreateFleetMetricRequestBodyUnitEnum {
    Seconds = "Seconds"
,    Microseconds = "Microseconds"
,    Milliseconds = "Milliseconds"
,    Bytes = "Bytes"
,    Kilobytes = "Kilobytes"
,    Megabytes = "Megabytes"
,    Gigabytes = "Gigabytes"
,    Terabytes = "Terabytes"
,    Bits = "Bits"
,    Kilobits = "Kilobits"
,    Megabits = "Megabits"
,    Gigabits = "Gigabits"
,    Terabits = "Terabits"
,    Percent = "Percent"
,    Count = "Count"
,    BytesSecond = "Bytes/Second"
,    KilobytesSecond = "Kilobytes/Second"
,    MegabytesSecond = "Megabytes/Second"
,    GigabytesSecond = "Gigabytes/Second"
,    TerabytesSecond = "Terabytes/Second"
,    BitsSecond = "Bits/Second"
,    KilobitsSecond = "Kilobits/Second"
,    MegabitsSecond = "Megabits/Second"
,    GigabitsSecond = "Gigabits/Second"
,    TerabitsSecond = "Terabits/Second"
,    CountSecond = "Count/Second"
,    None = "None"
}


export class CreateFleetMetricRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationField" })
  aggregationField: string;

  @Metadata({ data: "json, name=aggregationType" })
  aggregationType: CreateFleetMetricRequestBodyAggregationType;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=indexName" })
  indexName?: string;

  @Metadata({ data: "json, name=period" })
  period: number;

  @Metadata({ data: "json, name=queryString" })
  queryString: string;

  @Metadata({ data: "json, name=queryVersion" })
  queryVersion?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=unit" })
  unit?: CreateFleetMetricRequestBodyUnitEnum;
}


export class CreateFleetMetricRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateFleetMetricPathParams;

  @Metadata()
  headers: CreateFleetMetricHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateFleetMetricRequestBody;
}


export class CreateFleetMetricResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createFleetMetricResponse?: shared.CreateFleetMetricResponse;

  @Metadata()
  indexNotReadyException?: any;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidAggregationException?: any;

  @Metadata()
  invalidQueryException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;
}
