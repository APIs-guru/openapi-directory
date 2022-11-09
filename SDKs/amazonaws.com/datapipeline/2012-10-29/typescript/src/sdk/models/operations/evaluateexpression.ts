import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EvaluateExpressionXAmzTargetEnum {
    DataPipelineEvaluateExpression = "DataPipeline.EvaluateExpression"
}


export class EvaluateExpressionHeaders extends SpeakeasyBase {
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
  xAmzTarget: EvaluateExpressionXAmzTargetEnum;
}


export class EvaluateExpressionRequest extends SpeakeasyBase {
  @Metadata()
  headers: EvaluateExpressionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EvaluateExpressionInput;
}


export class EvaluateExpressionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  evaluateExpressionOutput?: shared.EvaluateExpressionOutput;

  @Metadata()
  internalServiceError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  pipelineDeletedException?: any;

  @Metadata()
  pipelineNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskNotFoundException?: any;
}
