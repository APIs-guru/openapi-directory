package shared

import (
	"time"
)

type ControlMetadata struct {
	Arn            *string    `json:"arn,omitempty"`
	ControlSources *string    `json:"controlSources,omitempty"`
	CreatedAt      *time.Time `json:"createdAt,omitempty"`
	ID             *string    `json:"id,omitempty"`
	LastUpdatedAt  *time.Time `json:"lastUpdatedAt,omitempty"`
	Name           *string    `json:"name,omitempty"`
}
