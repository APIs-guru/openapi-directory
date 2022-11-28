package shared

import (
	"time"
)

// Distribution
// A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
type Distribution struct {
	Arn                           string
	ActiveTrustedSigners          ActiveTrustedSigners
	AliasIcpRecordals             []AliasIcpRecordal
	DistributionConfig            DistributionConfig
	DomainName                    string
	ID                            string
	InProgressInvalidationBatches int64
	LastModifiedTime              time.Time
	Status                        string
}
