package shared

import (
	"time"
)

// TransitionState
// Represents information about the state of transitions between one stage and another stage.
type TransitionState struct {
	DisabledReason *string    `json:"disabledReason,omitempty"`
	Enabled        *bool      `json:"enabled,omitempty"`
	LastChangedAt  *time.Time `json:"lastChangedAt,omitempty"`
	LastChangedBy  *string    `json:"lastChangedBy,omitempty"`
}
