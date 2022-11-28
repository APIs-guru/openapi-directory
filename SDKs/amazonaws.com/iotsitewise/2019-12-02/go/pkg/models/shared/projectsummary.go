package shared

import (
	"time"
)

// ProjectSummary
// Contains project summary information.
type ProjectSummary struct {
	CreationDate   *time.Time `json:"creationDate,omitempty"`
	Description    *string    `json:"description,omitempty"`
	ID             string     `json:"id"`
	LastUpdateDate *time.Time `json:"lastUpdateDate,omitempty"`
	Name           string     `json:"name"`
}
