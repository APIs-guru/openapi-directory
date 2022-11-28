package shared

import (
	"time"
)

// ReputationOptions
// Contains information about the reputation settings for a configuration set.
type ReputationOptions struct {
	LastFreshStart           *time.Time
	ReputationMetricsEnabled *bool
	SendingEnabled           *bool
}
