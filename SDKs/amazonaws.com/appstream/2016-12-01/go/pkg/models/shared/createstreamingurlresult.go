package shared

import (
	"time"
)

type CreateStreamingURLResult struct {
	Expires      *time.Time `json:"Expires"`
	StreamingURL *string    `json:"StreamingURL"`
}
