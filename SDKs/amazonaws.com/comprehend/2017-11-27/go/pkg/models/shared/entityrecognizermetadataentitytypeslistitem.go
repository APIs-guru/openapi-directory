package shared

// EntityRecognizerMetadataEntityTypesListItem
// Individual item from the list of entity types in the metadata of an entity recognizer.
type EntityRecognizerMetadataEntityTypesListItem struct {
	EvaluationMetrics     *EntityTypesEvaluationMetrics `json:"EvaluationMetrics,omitempty"`
	NumberOfTrainMentions *int64                        `json:"NumberOfTrainMentions,omitempty"`
	Type                  *string                       `json:"Type,omitempty"`
}
