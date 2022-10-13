package shared

import (
	"time"
)

type InstanceGroupDetail struct {
	BidPrice              *string                `json:"BidPrice"`
	CreationDateTime      time.Time              `json:"CreationDateTime"`
	CustomAmiID           *string                `json:"CustomAmiId"`
	EndDateTime           *time.Time             `json:"EndDateTime"`
	InstanceGroupID       *string                `json:"InstanceGroupId"`
	InstanceRequestCount  int64                  `json:"InstanceRequestCount"`
	InstanceRole          InstanceRoleTypeEnum   `json:"InstanceRole"`
	InstanceRunningCount  int64                  `json:"InstanceRunningCount"`
	InstanceType          string                 `json:"InstanceType"`
	LastStateChangeReason *string                `json:"LastStateChangeReason"`
	Market                MarketTypeEnum         `json:"Market"`
	Name                  *string                `json:"Name"`
	ReadyDateTime         *time.Time             `json:"ReadyDateTime"`
	StartDateTime         *time.Time             `json:"StartDateTime"`
	State                 InstanceGroupStateEnum `json:"State"`
}
