import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityRecognizerMetadataEntityTypesListItem } from "./entityrecognizermetadataentitytypeslistitem";
import { EntityRecognizerEvaluationMetrics } from "./entityrecognizerevaluationmetrics";



// EntityRecognizerMetadata
/** 
 * Detailed information about an entity recognizer.
**/
export class EntityRecognizerMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntityTypes", elemType: EntityRecognizerMetadataEntityTypesListItem })
  entityTypes?: EntityRecognizerMetadataEntityTypesListItem[];

  @SpeakeasyMetadata({ data: "json, name=EvaluationMetrics" })
  evaluationMetrics?: EntityRecognizerEvaluationMetrics;

  @SpeakeasyMetadata({ data: "json, name=NumberOfTestDocuments" })
  numberOfTestDocuments?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfTrainedDocuments" })
  numberOfTrainedDocuments?: number;
}
