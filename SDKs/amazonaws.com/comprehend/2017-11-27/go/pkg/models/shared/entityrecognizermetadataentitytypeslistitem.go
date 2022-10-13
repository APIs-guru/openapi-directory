package shared

type EntityRecognizerMetadataEntityTypesListItem struct {
	EvaluationMetrics     *EntityTypesEvaluationMetrics `json:"EvaluationMetrics"`
	NumberOfTrainMentions *int64                        `json:"NumberOfTrainMentions"`
	Type                  *string                       `json:"Type"`
}
