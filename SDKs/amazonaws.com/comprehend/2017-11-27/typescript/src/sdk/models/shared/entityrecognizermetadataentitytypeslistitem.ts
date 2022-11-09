import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityTypesEvaluationMetrics } from "./entitytypesevaluationmetrics";


// EntityRecognizerMetadataEntityTypesListItem
/** 
 * Individual item from the list of entity types in the metadata of an entity recognizer.
**/
export class EntityRecognizerMetadataEntityTypesListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=EvaluationMetrics" })
  evaluationMetrics?: EntityTypesEvaluationMetrics;

  @Metadata({ data: "json, name=NumberOfTrainMentions" })
  numberOfTrainMentions?: number;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
