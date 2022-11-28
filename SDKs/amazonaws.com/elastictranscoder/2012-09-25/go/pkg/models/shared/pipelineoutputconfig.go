package shared

// PipelineOutputConfig
// The <code>PipelineOutputConfig</code> structure.
type PipelineOutputConfig struct {
	Bucket       *string      `json:"Bucket,omitempty"`
	Permissions  []Permission `json:"Permissions,omitempty"`
	StorageClass *string      `json:"StorageClass,omitempty"`
}
