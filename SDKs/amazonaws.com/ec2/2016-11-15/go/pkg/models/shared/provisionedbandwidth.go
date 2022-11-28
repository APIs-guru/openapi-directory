package shared

import (
	"time"
)

// ProvisionedBandwidth
// Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.
type ProvisionedBandwidth struct {
	ProvisionTime *time.Time
	Provisioned   *string
	RequestTime   *time.Time
	Requested     *string
	Status        *string
}
