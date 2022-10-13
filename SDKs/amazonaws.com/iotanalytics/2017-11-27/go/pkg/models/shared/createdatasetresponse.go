package shared

type CreateDatasetResponse struct {
	DatasetArn      *string          `json:"datasetArn"`
	DatasetName     *string          `json:"datasetName"`
	RetentionPeriod *RetentionPeriod `json:"retentionPeriod"`
}
