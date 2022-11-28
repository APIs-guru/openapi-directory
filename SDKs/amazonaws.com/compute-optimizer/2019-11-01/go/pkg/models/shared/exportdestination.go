package shared

// ExportDestination
// Describes the destination of the recommendations export and metadata files.
type ExportDestination struct {
	S3 *S3Destination `json:"s3,omitempty"`
}
