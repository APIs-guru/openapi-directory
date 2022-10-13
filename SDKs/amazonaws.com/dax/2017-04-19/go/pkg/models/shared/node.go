package shared

import (
	"time"
)

type Node struct {
	AvailabilityZone     *string    `json:"AvailabilityZone"`
	Endpoint             *Endpoint  `json:"Endpoint"`
	NodeCreateTime       *time.Time `json:"NodeCreateTime"`
	NodeID               *string    `json:"NodeId"`
	NodeStatus           *string    `json:"NodeStatus"`
	ParameterGroupStatus *string    `json:"ParameterGroupStatus"`
}
