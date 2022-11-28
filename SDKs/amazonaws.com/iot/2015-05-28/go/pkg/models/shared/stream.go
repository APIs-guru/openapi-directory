package shared

// Stream
// Describes a group of files that can be streamed.
type Stream struct {
	FileID   *int64  `json:"fileId,omitempty"`
	StreamID *string `json:"streamId,omitempty"`
}
