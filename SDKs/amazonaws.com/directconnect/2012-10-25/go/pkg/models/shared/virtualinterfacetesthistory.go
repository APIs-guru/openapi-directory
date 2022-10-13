package shared

import (
	"time"
)

type VirtualInterfaceTestHistory struct {
	BgpPeers              []string   `json:"bgpPeers"`
	EndTime               *time.Time `json:"endTime"`
	OwnerAccount          *string    `json:"ownerAccount"`
	StartTime             *time.Time `json:"startTime"`
	Status                *string    `json:"status"`
	TestDurationInMinutes *int64     `json:"testDurationInMinutes"`
	TestID                *string    `json:"testId"`
	VirtualInterfaceID    *string    `json:"virtualInterfaceId"`
}
