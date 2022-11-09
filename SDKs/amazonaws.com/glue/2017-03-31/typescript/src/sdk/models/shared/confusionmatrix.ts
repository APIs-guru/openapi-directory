import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfusionMatrix
/** 
 * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p> <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
**/
export class ConfusionMatrix extends SpeakeasyBase {
  @Metadata({ data: "json, name=NumFalseNegatives" })
  numFalseNegatives?: number;

  @Metadata({ data: "json, name=NumFalsePositives" })
  numFalsePositives?: number;

  @Metadata({ data: "json, name=NumTrueNegatives" })
  numTrueNegatives?: number;

  @Metadata({ data: "json, name=NumTruePositives" })
  numTruePositives?: number;
}
