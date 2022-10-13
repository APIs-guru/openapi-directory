package shared

import (
	"time"
)

type DashboardSummary struct {
	CreationDate   *time.Time `json:"creationDate"`
	Description    *string    `json:"description"`
	ID             string     `json:"id"`
	LastUpdateDate *time.Time `json:"lastUpdateDate"`
	Name           string     `json:"name"`
}
