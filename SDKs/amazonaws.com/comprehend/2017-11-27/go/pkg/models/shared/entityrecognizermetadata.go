package shared

type EntityRecognizerMetadata struct {
	EntityTypes              []EntityRecognizerMetadataEntityTypesListItem `json:"EntityTypes"`
	EvaluationMetrics        *EntityRecognizerEvaluationMetrics            `json:"EvaluationMetrics"`
	NumberOfTestDocuments    *int64                                        `json:"NumberOfTestDocuments"`
	NumberOfTrainedDocuments *int64                                        `json:"NumberOfTrainedDocuments"`
}
