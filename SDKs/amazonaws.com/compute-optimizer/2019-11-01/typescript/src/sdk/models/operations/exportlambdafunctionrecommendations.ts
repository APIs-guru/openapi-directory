import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ExportLambdaFunctionRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceExportLambdaFunctionRecommendations = "ComputeOptimizerService.ExportLambdaFunctionRecommendations"
}


export class ExportLambdaFunctionRecommendationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ExportLambdaFunctionRecommendationsXAmzTargetEnum;
}


export class ExportLambdaFunctionRecommendationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ExportLambdaFunctionRecommendationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ExportLambdaFunctionRecommendationsRequest;
}


export class ExportLambdaFunctionRecommendationsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  exportLambdaFunctionRecommendationsResponse?: shared.ExportLambdaFunctionRecommendationsResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  missingAuthenticationToken?: any;

  @Metadata()
  optInRequiredException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
