package shared

import (
	"time"
)

// DashboardSummary
// Contains a dashboard summary.
type DashboardSummary struct {
	CreationDate   *time.Time `json:"creationDate,omitempty"`
	Description    *string    `json:"description,omitempty"`
	ID             string     `json:"id"`
	LastUpdateDate *time.Time `json:"lastUpdateDate,omitempty"`
	Name           string     `json:"name"`
}
