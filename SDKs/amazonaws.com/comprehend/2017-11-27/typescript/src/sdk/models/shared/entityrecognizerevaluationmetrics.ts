import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EntityRecognizerEvaluationMetrics
/** 
 * Detailed information about the accuracy of an entity recognizer. 
**/
export class EntityRecognizerEvaluationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=F1Score" })
  f1Score?: number;

  @SpeakeasyMetadata({ data: "json, name=Precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=Recall" })
  recall?: number;
}
