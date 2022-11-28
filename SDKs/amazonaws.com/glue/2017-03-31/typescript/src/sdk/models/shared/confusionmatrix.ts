import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfusionMatrix
/** 
 * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p> <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
**/
export class ConfusionMatrix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NumFalseNegatives" })
  numFalseNegatives?: number;

  @SpeakeasyMetadata({ data: "json, name=NumFalsePositives" })
  numFalsePositives?: number;

  @SpeakeasyMetadata({ data: "json, name=NumTrueNegatives" })
  numTrueNegatives?: number;

  @SpeakeasyMetadata({ data: "json, name=NumTruePositives" })
  numTruePositives?: number;
}
