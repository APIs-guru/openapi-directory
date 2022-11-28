import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartConfigRulesEvaluationXAmzTargetEnum {
    StarlingDoveServiceStartConfigRulesEvaluation = "StarlingDoveService.StartConfigRulesEvaluation"
}
export declare class StartConfigRulesEvaluationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartConfigRulesEvaluationXAmzTargetEnum;
}
export declare class StartConfigRulesEvaluationRequest extends SpeakeasyBase {
    headers: StartConfigRulesEvaluationHeaders;
    request: shared.StartConfigRulesEvaluationRequest;
}
export declare class StartConfigRulesEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    limitExceededException?: any;
    noSuchConfigRuleException?: any;
    resourceInUseException?: any;
    startConfigRulesEvaluationResponse?: Map<string, any>;
    statusCode: number;
}
