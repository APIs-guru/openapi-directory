package shared

import (
	"time"
)

// GluePolicy
// A structure for returning a resource policy.
type GluePolicy struct {
	CreateTime   *time.Time `json:"CreateTime,omitempty"`
	PolicyHash   *string    `json:"PolicyHash,omitempty"`
	PolicyInJSON *string    `json:"PolicyInJson,omitempty"`
	UpdateTime   *time.Time `json:"UpdateTime,omitempty"`
}
