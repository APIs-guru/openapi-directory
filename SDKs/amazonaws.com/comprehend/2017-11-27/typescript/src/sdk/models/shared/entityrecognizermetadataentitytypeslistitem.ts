import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityTypesEvaluationMetrics } from "./entitytypesevaluationmetrics";



// EntityRecognizerMetadataEntityTypesListItem
/** 
 * Individual item from the list of entity types in the metadata of an entity recognizer.
**/
export class EntityRecognizerMetadataEntityTypesListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EvaluationMetrics" })
  evaluationMetrics?: EntityTypesEvaluationMetrics;

  @SpeakeasyMetadata({ data: "json, name=NumberOfTrainMentions" })
  numberOfTrainMentions?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
