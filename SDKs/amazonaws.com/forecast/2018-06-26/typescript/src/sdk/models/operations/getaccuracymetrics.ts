import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAccuracyMetricsXAmzTargetEnum {
    AmazonForecastGetAccuracyMetrics = "AmazonForecast.GetAccuracyMetrics"
}


export class GetAccuracyMetricsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetAccuracyMetricsXAmzTargetEnum;
}


export class GetAccuracyMetricsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAccuracyMetricsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetAccuracyMetricsRequest;
}


export class GetAccuracyMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAccuracyMetricsResponse?: shared.GetAccuracyMetricsResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
