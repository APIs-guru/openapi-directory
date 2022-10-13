package shared

import (
	"time"
)

type TransitionState struct {
	DisabledReason *string    `json:"disabledReason"`
	Enabled        *bool      `json:"enabled"`
	LastChangedAt  *time.Time `json:"lastChangedAt"`
	LastChangedBy  *string    `json:"lastChangedBy"`
}
