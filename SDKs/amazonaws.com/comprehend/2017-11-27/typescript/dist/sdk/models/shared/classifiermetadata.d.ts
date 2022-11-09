import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ClassifierEvaluationMetrics } from "./classifierevaluationmetrics";
/**
 * Provides information about a document classifier.
**/
export declare class ClassifierMetadata extends SpeakeasyBase {
    evaluationMetrics?: ClassifierEvaluationMetrics;
    numberOfLabels?: number;
    numberOfTestDocuments?: number;
    numberOfTrainedDocuments?: number;
}
