package shared

// EntityRecognizerMetadata
// Detailed information about an entity recognizer.
type EntityRecognizerMetadata struct {
	EntityTypes              []EntityRecognizerMetadataEntityTypesListItem `json:"EntityTypes,omitempty"`
	EvaluationMetrics        *EntityRecognizerEvaluationMetrics            `json:"EvaluationMetrics,omitempty"`
	NumberOfTestDocuments    *int64                                        `json:"NumberOfTestDocuments,omitempty"`
	NumberOfTrainedDocuments *int64                                        `json:"NumberOfTrainedDocuments,omitempty"`
}
