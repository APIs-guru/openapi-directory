package shared

import (
	"time"
)

// StreamInfo
// Information about a stream.
type StreamInfo struct {
	CreatedAt     *time.Time   `json:"createdAt,omitempty"`
	Description   *string      `json:"description,omitempty"`
	Files         []StreamFile `json:"files,omitempty"`
	LastUpdatedAt *time.Time   `json:"lastUpdatedAt,omitempty"`
	RoleArn       *string      `json:"roleArn,omitempty"`
	StreamArn     *string      `json:"streamArn,omitempty"`
	StreamID      *string      `json:"streamId,omitempty"`
	StreamVersion *int64       `json:"streamVersion,omitempty"`
}
