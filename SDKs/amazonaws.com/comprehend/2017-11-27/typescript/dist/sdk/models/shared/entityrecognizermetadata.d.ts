import { SpeakeasyBase } from "../../../internal/utils";
import { EntityRecognizerMetadataEntityTypesListItem } from "./entityrecognizermetadataentitytypeslistitem";
import { EntityRecognizerEvaluationMetrics } from "./entityrecognizerevaluationmetrics";
/**
 * Detailed information about an entity recognizer.
**/
export declare class EntityRecognizerMetadata extends SpeakeasyBase {
    entityTypes?: EntityRecognizerMetadataEntityTypesListItem[];
    evaluationMetrics?: EntityRecognizerEvaluationMetrics;
    numberOfTestDocuments?: number;
    numberOfTrainedDocuments?: number;
}
