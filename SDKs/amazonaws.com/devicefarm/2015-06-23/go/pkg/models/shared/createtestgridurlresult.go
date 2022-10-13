package shared

import (
	"time"
)

type CreateTestGridURLResult struct {
	Expires *time.Time `json:"expires"`
	URL     *string    `json:"url"`
}
