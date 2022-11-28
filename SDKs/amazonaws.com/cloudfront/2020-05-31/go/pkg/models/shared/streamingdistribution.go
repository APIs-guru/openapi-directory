package shared

import (
	"time"
)

// StreamingDistribution
// A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery.
type StreamingDistribution struct {
	Arn                         string
	ActiveTrustedSigners        ActiveTrustedSigners
	DomainName                  string
	ID                          string
	LastModifiedTime            *time.Time
	Status                      string
	StreamingDistributionConfig StreamingDistributionConfig
}
