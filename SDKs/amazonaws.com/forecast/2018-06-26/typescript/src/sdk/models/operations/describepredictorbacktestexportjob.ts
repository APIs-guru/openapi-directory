import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribePredictorBacktestExportJobXAmzTargetEnum {
    AmazonForecastDescribePredictorBacktestExportJob = "AmazonForecast.DescribePredictorBacktestExportJob"
}


export class DescribePredictorBacktestExportJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribePredictorBacktestExportJobXAmzTargetEnum;
}


export class DescribePredictorBacktestExportJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribePredictorBacktestExportJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribePredictorBacktestExportJobRequest;
}


export class DescribePredictorBacktestExportJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describePredictorBacktestExportJobResponse?: shared.DescribePredictorBacktestExportJobResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
