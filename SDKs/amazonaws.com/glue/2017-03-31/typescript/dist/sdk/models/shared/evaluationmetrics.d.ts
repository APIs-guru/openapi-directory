import { SpeakeasyBase } from "../../../internal/utils";
import { FindMatchesMetrics } from "./findmatchesmetrics";
import { TransformTypeEnum } from "./transformtypeenum";
/**
 * Evaluation metrics provide an estimate of the quality of your machine learning transform.
**/
export declare class EvaluationMetrics extends SpeakeasyBase {
    findMatchesMetrics?: FindMatchesMetrics;
    transformType: TransformTypeEnum;
}
