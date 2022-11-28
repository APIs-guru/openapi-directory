package shared

import (
	"time"
)

// ManagedAgent
// Details about the managed agent status for the container.
type ManagedAgent struct {
	LastStartedAt *time.Time            `json:"lastStartedAt,omitempty"`
	LastStatus    *string               `json:"lastStatus,omitempty"`
	Name          *ManagedAgentNameEnum `json:"name,omitempty"`
	Reason        *string               `json:"reason,omitempty"`
}
