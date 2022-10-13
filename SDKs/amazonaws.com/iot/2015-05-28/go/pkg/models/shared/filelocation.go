package shared

type FileLocation struct {
	S3Location *S3Location `json:"s3Location"`
	Stream     *Stream     `json:"stream"`
}
