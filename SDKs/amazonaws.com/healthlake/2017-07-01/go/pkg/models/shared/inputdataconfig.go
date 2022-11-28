package shared

// InputDataConfig
//
//	The input properties for an import job.
type InputDataConfig struct {
	S3URI *string `json:"S3Uri,omitempty"`
}
