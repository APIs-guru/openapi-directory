import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteEvaluationResultsXAmzTargetEnum {
    StarlingDoveServiceDeleteEvaluationResults = "StarlingDoveService.DeleteEvaluationResults"
}
export declare class DeleteEvaluationResultsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEvaluationResultsXAmzTargetEnum;
}
export declare class DeleteEvaluationResultsRequest extends SpeakeasyBase {
    headers: DeleteEvaluationResultsHeaders;
    request: shared.DeleteEvaluationResultsRequest;
}
export declare class DeleteEvaluationResultsResponse extends SpeakeasyBase {
    contentType: string;
    deleteEvaluationResultsResponse?: Map<string, any>;
    noSuchConfigRuleException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
