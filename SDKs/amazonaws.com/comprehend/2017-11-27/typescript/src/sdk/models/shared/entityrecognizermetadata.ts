import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityRecognizerMetadataEntityTypesListItem } from "./entityrecognizermetadataentitytypeslistitem";
import { EntityRecognizerEvaluationMetrics } from "./entityrecognizerevaluationmetrics";


// EntityRecognizerMetadata
/** 
 * Detailed information about an entity recognizer.
**/
export class EntityRecognizerMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntityTypes", elemType: shared.EntityRecognizerMetadataEntityTypesListItem })
  entityTypes?: EntityRecognizerMetadataEntityTypesListItem[];

  @Metadata({ data: "json, name=EvaluationMetrics" })
  evaluationMetrics?: EntityRecognizerEvaluationMetrics;

  @Metadata({ data: "json, name=NumberOfTestDocuments" })
  numberOfTestDocuments?: number;

  @Metadata({ data: "json, name=NumberOfTrainedDocuments" })
  numberOfTrainedDocuments?: number;
}
