package shared

type StreamFile struct {
	FileID     *int64      `json:"fileId"`
	S3Location *S3Location `json:"s3Location"`
}
