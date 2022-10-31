package shared

type CreateDatasetResponse struct {
	DatasetArn      *string          `json:"datasetArn,omitempty"`
	DatasetName     *string          `json:"datasetName,omitempty"`
	RetentionPeriod *RetentionPeriod `json:"retentionPeriod,omitempty"`
}
