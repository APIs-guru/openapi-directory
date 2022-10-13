package shared

type ClassifierMetadata struct {
	EvaluationMetrics        *ClassifierEvaluationMetrics `json:"EvaluationMetrics"`
	NumberOfLabels           *int64                       `json:"NumberOfLabels"`
	NumberOfTestDocuments    *int64                       `json:"NumberOfTestDocuments"`
	NumberOfTrainedDocuments *int64                       `json:"NumberOfTrainedDocuments"`
}
