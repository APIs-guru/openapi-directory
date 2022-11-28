import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p> <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
**/
export declare class ConfusionMatrix extends SpeakeasyBase {
    numFalseNegatives?: number;
    numFalsePositives?: number;
    numTrueNegatives?: number;
    numTruePositives?: number;
}
