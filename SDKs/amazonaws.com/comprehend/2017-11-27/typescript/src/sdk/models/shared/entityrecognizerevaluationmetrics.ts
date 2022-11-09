import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EntityRecognizerEvaluationMetrics
/** 
 * Detailed information about the accuracy of an entity recognizer. 
**/
export class EntityRecognizerEvaluationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=F1Score" })
  f1Score?: number;

  @Metadata({ data: "json, name=Precision" })
  precision?: number;

  @Metadata({ data: "json, name=Recall" })
  recall?: number;
}
