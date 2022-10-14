package shared

type ExportDestination struct {
	S3 *S3Destination `json:"s3,omitempty"`
}
