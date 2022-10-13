package shared

import (
	"time"
)

type APIKey struct {
	CreatedDate     *time.Time        `json:"createdDate"`
	CustomerID      *string           `json:"customerId"`
	Description     *string           `json:"description"`
	Enabled         *bool             `json:"enabled"`
	ID              *string           `json:"id"`
	LastUpdatedDate *time.Time        `json:"lastUpdatedDate"`
	Name            *string           `json:"name"`
	StageKeys       []string          `json:"stageKeys"`
	Tags            map[string]string `json:"tags"`
	Value           *string           `json:"value"`
}
