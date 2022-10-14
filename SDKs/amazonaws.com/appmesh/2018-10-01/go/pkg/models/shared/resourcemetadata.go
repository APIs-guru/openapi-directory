package shared

import (
	"time"
)

type ResourceMetadata struct {
	Arn           *string    `json:"arn,omitempty"`
	CreatedAt     *time.Time `json:"createdAt,omitempty"`
	LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
	UID           *string    `json:"uid,omitempty"`
	Version       *int64     `json:"version,omitempty"`
}
