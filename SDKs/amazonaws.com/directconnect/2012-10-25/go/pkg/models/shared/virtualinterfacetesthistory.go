package shared

import (
	"time"
)

type VirtualInterfaceTestHistory struct {
	BgpPeers              []string   `json:"bgpPeers,omitempty"`
	EndTime               *time.Time `json:"endTime,omitempty"`
	OwnerAccount          *string    `json:"ownerAccount,omitempty"`
	StartTime             *time.Time `json:"startTime,omitempty"`
	Status                *string    `json:"status,omitempty"`
	TestDurationInMinutes *int64     `json:"testDurationInMinutes,omitempty"`
	TestID                *string    `json:"testId,omitempty"`
	VirtualInterfaceID    *string    `json:"virtualInterfaceId,omitempty"`
}
