package shared

type S3Location struct {
	Bucket  *string `json:"bucket"`
	Key     *string `json:"key"`
	Version *string `json:"version"`
}
