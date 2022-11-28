package shared

import (
	"time"
)

// StreamingDistribution
// A streaming distribution.
type StreamingDistribution struct {
	Arn                         string
	ActiveTrustedSigners        ActiveTrustedSigners
	DomainName                  string
	ID                          string
	LastModifiedTime            *time.Time
	Status                      string
	StreamingDistributionConfig StreamingDistributionConfig
}
