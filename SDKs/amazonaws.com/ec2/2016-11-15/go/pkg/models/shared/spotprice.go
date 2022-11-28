package shared

import (
	"time"
)

// SpotPrice
// Describes the maximum price per hour that you are willing to pay for a Spot Instance.
type SpotPrice struct {
	AvailabilityZone   *string
	InstanceType       *InstanceTypeEnum
	ProductDescription *RiProductDescriptionEnum
	SpotPrice          *string
	Timestamp          *time.Time
}
