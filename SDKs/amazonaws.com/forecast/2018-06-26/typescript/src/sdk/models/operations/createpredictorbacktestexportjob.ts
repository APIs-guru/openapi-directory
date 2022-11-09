import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreatePredictorBacktestExportJobXAmzTargetEnum {
    AmazonForecastCreatePredictorBacktestExportJob = "AmazonForecast.CreatePredictorBacktestExportJob"
}


export class CreatePredictorBacktestExportJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePredictorBacktestExportJobXAmzTargetEnum;
}


export class CreatePredictorBacktestExportJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePredictorBacktestExportJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreatePredictorBacktestExportJobRequest;
}


export class CreatePredictorBacktestExportJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createPredictorBacktestExportJobResponse?: shared.CreatePredictorBacktestExportJobResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
