import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ColumnImportance } from "./columnimportance";
import { ConfusionMatrix } from "./confusionmatrix";


// FindMatchesMetrics
/** 
 * The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise.
**/
export class FindMatchesMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=AreaUnderPRCurve" })
  areaUnderPrCurve?: number;

  @Metadata({ data: "json, name=ColumnImportances", elemType: shared.ColumnImportance })
  columnImportances?: ColumnImportance[];

  @Metadata({ data: "json, name=ConfusionMatrix" })
  confusionMatrix?: ConfusionMatrix;

  @Metadata({ data: "json, name=F1" })
  f1?: number;

  @Metadata({ data: "json, name=Precision" })
  precision?: number;

  @Metadata({ data: "json, name=Recall" })
  recall?: number;
}
