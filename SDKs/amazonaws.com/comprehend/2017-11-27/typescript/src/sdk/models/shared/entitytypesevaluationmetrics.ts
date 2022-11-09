import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EntityTypesEvaluationMetrics
/** 
 * Detailed information about the accuracy of an entity recognizer for a specific entity type. 
**/
export class EntityTypesEvaluationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=F1Score" })
  f1Score?: number;

  @Metadata({ data: "json, name=Precision" })
  precision?: number;

  @Metadata({ data: "json, name=Recall" })
  recall?: number;
}
