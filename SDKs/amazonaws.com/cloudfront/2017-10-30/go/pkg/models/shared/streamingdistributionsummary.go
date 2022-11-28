package shared

import (
	"time"
)

// StreamingDistributionSummary
//
//	A summary of the information for an Amazon CloudFront streaming distribution.
type StreamingDistributionSummary struct {
	Arn              string
	Aliases          Aliases
	Comment          string
	DomainName       string
	Enabled          bool
	ID               string
	LastModifiedTime time.Time
	PriceClass       PriceClassEnum
	S3Origin         S3Origin
	Status           string
	TrustedSigners   TrustedSigners
}
