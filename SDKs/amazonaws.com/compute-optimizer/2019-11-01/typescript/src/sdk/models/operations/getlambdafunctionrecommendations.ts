import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetLambdaFunctionRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceGetLambdaFunctionRecommendations = "ComputeOptimizerService.GetLambdaFunctionRecommendations"
}


export class GetLambdaFunctionRecommendationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetLambdaFunctionRecommendationsXAmzTargetEnum;
}


export class GetLambdaFunctionRecommendationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetLambdaFunctionRecommendationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetLambdaFunctionRecommendationsRequest;
}


export class GetLambdaFunctionRecommendationsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getLambdaFunctionRecommendationsResponse?: shared.GetLambdaFunctionRecommendationsResponse;

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
