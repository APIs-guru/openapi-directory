package shared

// DataSource
// The source of your training data, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateDatasetImportJob</a> request.
type DataSource struct {
	S3Config S3Config `json:"S3Config"`
}
