import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EntityTypesEvaluationMetrics
/** 
 * Detailed information about the accuracy of an entity recognizer for a specific entity type. 
**/
export class EntityTypesEvaluationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=F1Score" })
  f1Score?: number;

  @SpeakeasyMetadata({ data: "json, name=Precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=Recall" })
  recall?: number;
}
