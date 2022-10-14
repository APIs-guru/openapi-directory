package shared

import (
	"time"
)

type CreateTestGridURLResult struct {
	Expires *time.Time `json:"expires,omitempty"`
	URL     *string    `json:"url,omitempty"`
}
