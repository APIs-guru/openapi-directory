package shared

import (
	"time"
)

type StreamInfo struct {
	CreatedAt     *time.Time   `json:"createdAt"`
	Description   *string      `json:"description"`
	Files         []StreamFile `json:"files"`
	LastUpdatedAt *time.Time   `json:"lastUpdatedAt"`
	RoleArn       *string      `json:"roleArn"`
	StreamArn     *string      `json:"streamArn"`
	StreamID      *string      `json:"streamId"`
	StreamVersion *int64       `json:"streamVersion"`
}
