package shared

import (
	"time"
)

type ManagedAgent struct {
	LastStartedAt *time.Time            `json:"lastStartedAt"`
	LastStatus    *string               `json:"lastStatus"`
	Name          *ManagedAgentNameEnum `json:"name"`
	Reason        *string               `json:"reason"`
}
