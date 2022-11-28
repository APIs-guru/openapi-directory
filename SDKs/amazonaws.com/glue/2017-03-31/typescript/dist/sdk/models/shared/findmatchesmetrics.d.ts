import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnImportance } from "./columnimportance";
import { ConfusionMatrix } from "./confusionmatrix";
/**
 * The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise.
**/
export declare class FindMatchesMetrics extends SpeakeasyBase {
    areaUnderPrCurve?: number;
    columnImportances?: ColumnImportance[];
    confusionMatrix?: ConfusionMatrix;
    f1?: number;
    precision?: number;
    recall?: number;
}
