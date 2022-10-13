package shared

import (
	"time"
)

type CreateImageBuilderStreamingURLResult struct {
	Expires      *time.Time `json:"Expires"`
	StreamingURL *string    `json:"StreamingURL"`
}
