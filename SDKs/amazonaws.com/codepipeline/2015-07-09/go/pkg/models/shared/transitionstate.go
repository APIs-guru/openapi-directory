package shared

import (
	"time"
)

type TransitionState struct {
	DisabledReason *string    `json:"disabledReason,omitempty"`
	Enabled        *bool      `json:"enabled,omitempty"`
	LastChangedAt  *time.Time `json:"lastChangedAt,omitempty"`
	LastChangedBy  *string    `json:"lastChangedBy,omitempty"`
}
