package shared

// DataDestination
// The destination for an export job. Provide an S3 path, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an AWS Key Management Service (KMS) key (optional).
type DataDestination struct {
	S3Config S3Config `json:"S3Config"`
}
