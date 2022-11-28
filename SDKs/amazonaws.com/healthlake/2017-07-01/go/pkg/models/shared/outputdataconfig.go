package shared

// OutputDataConfig
// The output data configuration that was supplied when the export job was created.
type OutputDataConfig struct {
	S3Configuration *S3Configuration `json:"S3Configuration,omitempty"`
}
