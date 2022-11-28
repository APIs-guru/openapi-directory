import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutExternalEvaluationXAmzTargetEnum {
    StarlingDoveServicePutExternalEvaluation = "StarlingDoveService.PutExternalEvaluation"
}
export declare class PutExternalEvaluationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutExternalEvaluationXAmzTargetEnum;
}
export declare class PutExternalEvaluationRequest extends SpeakeasyBase {
    headers: PutExternalEvaluationHeaders;
    request: shared.PutExternalEvaluationRequest;
}
export declare class PutExternalEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    noSuchConfigRuleException?: any;
    putExternalEvaluationResponse?: Map<string, any>;
    statusCode: number;
}
