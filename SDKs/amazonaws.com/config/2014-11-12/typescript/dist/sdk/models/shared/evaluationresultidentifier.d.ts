import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationResultQualifier } from "./evaluationresultqualifier";
/**
 * Uniquely identifies an evaluation result.
**/
export declare class EvaluationResultIdentifier extends SpeakeasyBase {
    evaluationResultQualifier?: EvaluationResultQualifier;
    orderingTimestamp?: Date;
}
