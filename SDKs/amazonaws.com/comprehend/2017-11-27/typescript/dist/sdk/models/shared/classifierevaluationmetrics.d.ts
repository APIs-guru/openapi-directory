import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the result metrics for the test data associated with an documentation classifier.
**/
export declare class ClassifierEvaluationMetrics extends SpeakeasyBase {
    accuracy?: number;
    f1Score?: number;
    hammingLoss?: number;
    microF1Score?: number;
    microPrecision?: number;
    microRecall?: number;
    precision?: number;
    recall?: number;
}
