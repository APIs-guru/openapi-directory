package shared

import (
	"time"
)

// InstanceGroupDetail
// Detailed information about an instance group.
type InstanceGroupDetail struct {
	BidPrice              *string                `json:"BidPrice,omitempty"`
	CreationDateTime      time.Time              `json:"CreationDateTime"`
	CustomAmiID           *string                `json:"CustomAmiId,omitempty"`
	EndDateTime           *time.Time             `json:"EndDateTime,omitempty"`
	InstanceGroupID       *string                `json:"InstanceGroupId,omitempty"`
	InstanceRequestCount  int64                  `json:"InstanceRequestCount"`
	InstanceRole          InstanceRoleTypeEnum   `json:"InstanceRole"`
	InstanceRunningCount  int64                  `json:"InstanceRunningCount"`
	InstanceType          string                 `json:"InstanceType"`
	LastStateChangeReason *string                `json:"LastStateChangeReason,omitempty"`
	Market                MarketTypeEnum         `json:"Market"`
	Name                  *string                `json:"Name,omitempty"`
	ReadyDateTime         *time.Time             `json:"ReadyDateTime,omitempty"`
	StartDateTime         *time.Time             `json:"StartDateTime,omitempty"`
	State                 InstanceGroupStateEnum `json:"State"`
}
