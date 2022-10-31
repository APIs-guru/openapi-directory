package shared

type EntityRecognizerMetadataEntityTypesListItem struct {
	EvaluationMetrics     *EntityTypesEvaluationMetrics `json:"EvaluationMetrics,omitempty"`
	NumberOfTrainMentions *int64                        `json:"NumberOfTrainMentions,omitempty"`
	Type                  *string                       `json:"Type,omitempty"`
}
