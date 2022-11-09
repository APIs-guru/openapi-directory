import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum EvaluateExpressionXAmzTargetEnum {
    DataPipelineEvaluateExpression = "DataPipeline.EvaluateExpression"
}
export declare class EvaluateExpressionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EvaluateExpressionXAmzTargetEnum;
}
export declare class EvaluateExpressionRequest extends SpeakeasyBase {
    headers: EvaluateExpressionHeaders;
    request: shared.EvaluateExpressionInput;
}
export declare class EvaluateExpressionResponse extends SpeakeasyBase {
    contentType: string;
    evaluateExpressionOutput?: shared.EvaluateExpressionOutput;
    internalServiceError?: any;
    invalidRequestException?: any;
    pipelineDeletedException?: any;
    pipelineNotFoundException?: any;
    statusCode: number;
    taskNotFoundException?: any;
}
