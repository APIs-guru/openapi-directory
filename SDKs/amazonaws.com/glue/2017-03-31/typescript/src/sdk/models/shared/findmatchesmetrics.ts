import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnImportance } from "./columnimportance";
import { ConfusionMatrix } from "./confusionmatrix";



// FindMatchesMetrics
/** 
 * The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise.
**/
export class FindMatchesMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AreaUnderPRCurve" })
  areaUnderPrCurve?: number;

  @SpeakeasyMetadata({ data: "json, name=ColumnImportances", elemType: ColumnImportance })
  columnImportances?: ColumnImportance[];

  @SpeakeasyMetadata({ data: "json, name=ConfusionMatrix" })
  confusionMatrix?: ConfusionMatrix;

  @SpeakeasyMetadata({ data: "json, name=F1" })
  f1?: number;

  @SpeakeasyMetadata({ data: "json, name=Precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=Recall" })
  recall?: number;
}
