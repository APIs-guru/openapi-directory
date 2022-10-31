package shared

type OutputLocation struct {
	S3 *S3Location `json:"S3,omitempty"`
}
