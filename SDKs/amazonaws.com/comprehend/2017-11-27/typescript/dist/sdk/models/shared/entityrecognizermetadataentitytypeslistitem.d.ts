import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypesEvaluationMetrics } from "./entitytypesevaluationmetrics";
/**
 * Individual item from the list of entity types in the metadata of an entity recognizer.
**/
export declare class EntityRecognizerMetadataEntityTypesListItem extends SpeakeasyBase {
    evaluationMetrics?: EntityTypesEvaluationMetrics;
    numberOfTrainMentions?: number;
    type?: string;
}
