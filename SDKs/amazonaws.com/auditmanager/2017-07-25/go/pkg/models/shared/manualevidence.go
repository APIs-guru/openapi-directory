package shared

// ManualEvidence
//
//	Evidence that is uploaded to Audit Manager manually.
type ManualEvidence struct {
	S3ResourcePath *string `json:"s3ResourcePath,omitempty"`
}
