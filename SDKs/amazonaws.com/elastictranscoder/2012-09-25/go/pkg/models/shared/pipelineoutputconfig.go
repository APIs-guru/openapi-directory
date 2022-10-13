package shared

type PipelineOutputConfig struct {
	Bucket       *string      `json:"Bucket"`
	Permissions  []Permission `json:"Permissions"`
	StorageClass *string      `json:"StorageClass"`
}
