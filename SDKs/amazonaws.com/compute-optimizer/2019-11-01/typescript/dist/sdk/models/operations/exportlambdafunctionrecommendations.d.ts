import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ExportLambdaFunctionRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceExportLambdaFunctionRecommendations = "ComputeOptimizerService.ExportLambdaFunctionRecommendations"
}
export declare class ExportLambdaFunctionRecommendationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportLambdaFunctionRecommendationsXAmzTargetEnum;
}
export declare class ExportLambdaFunctionRecommendationsRequest extends SpeakeasyBase {
    headers: ExportLambdaFunctionRecommendationsHeaders;
    request: shared.ExportLambdaFunctionRecommendationsRequest;
}
export declare class ExportLambdaFunctionRecommendationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    exportLambdaFunctionRecommendationsResponse?: shared.ExportLambdaFunctionRecommendationsResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    limitExceededException?: any;
    missingAuthenticationToken?: any;
    optInRequiredException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
