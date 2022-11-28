package shared

import (
	"time"
)

// Distribution
// The distribution's information.
type Distribution struct {
	Arn                           string
	ActiveTrustedSigners          ActiveTrustedSigners
	DistributionConfig            DistributionConfig
	DomainName                    string
	ID                            string
	InProgressInvalidationBatches int64
	LastModifiedTime              time.Time
	Status                        string
}
