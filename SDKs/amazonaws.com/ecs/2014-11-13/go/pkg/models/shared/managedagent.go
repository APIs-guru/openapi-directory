package shared

import (
	"time"
)

type ManagedAgent struct {
	LastStartedAt *time.Time            `json:"lastStartedAt,omitempty"`
	LastStatus    *string               `json:"lastStatus,omitempty"`
	Name          *ManagedAgentNameEnum `json:"name,omitempty"`
	Reason        *string               `json:"reason,omitempty"`
}
