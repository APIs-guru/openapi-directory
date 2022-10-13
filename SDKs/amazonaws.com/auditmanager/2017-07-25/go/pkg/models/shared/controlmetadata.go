package shared

import (
	"time"
)

type ControlMetadata struct {
	Arn            *string    `json:"arn"`
	ControlSources *string    `json:"controlSources"`
	CreatedAt      *time.Time `json:"createdAt"`
	ID             *string    `json:"id"`
	LastUpdatedAt  *time.Time `json:"lastUpdatedAt"`
	Name           *string    `json:"name"`
}
