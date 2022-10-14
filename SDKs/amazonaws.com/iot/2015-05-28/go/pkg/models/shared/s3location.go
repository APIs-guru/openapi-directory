package shared

type S3Location struct {
	Bucket  *string `json:"bucket,omitempty"`
	Key     *string `json:"key,omitempty"`
	Version *string `json:"version,omitempty"`
}
