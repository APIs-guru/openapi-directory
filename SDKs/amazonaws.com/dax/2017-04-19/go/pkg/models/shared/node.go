package shared

import (
	"time"
)

// Node
// Represents an individual node within a DAX cluster.
type Node struct {
	AvailabilityZone     *string    `json:"AvailabilityZone,omitempty"`
	Endpoint             *Endpoint  `json:"Endpoint,omitempty"`
	NodeCreateTime       *time.Time `json:"NodeCreateTime,omitempty"`
	NodeID               *string    `json:"NodeId,omitempty"`
	NodeStatus           *string    `json:"NodeStatus,omitempty"`
	ParameterGroupStatus *string    `json:"ParameterGroupStatus,omitempty"`
}
