package shared

import (
	"time"
)

// ResourceMetadata
// An object representing metadata for a resource.
type ResourceMetadata struct {
	Arn           *string    `json:"arn,omitempty"`
	CreatedAt     *time.Time `json:"createdAt,omitempty"`
	LastUpdatedAt *time.Time `json:"lastUpdatedAt,omitempty"`
	UID           *string    `json:"uid,omitempty"`
	Version       *int64     `json:"version,omitempty"`
}
