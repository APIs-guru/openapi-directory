package shared

// StreamFile
// Represents a file to stream.
type StreamFile struct {
	FileID     *int64      `json:"fileId,omitempty"`
	S3Location *S3Location `json:"s3Location,omitempty"`
}
