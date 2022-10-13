package shared

import (
	"time"
)

type WorkGroupSummary struct {
	CreationTime  *time.Time          `json:"CreationTime"`
	Description   *string             `json:"Description"`
	EngineVersion *EngineVersion      `json:"EngineVersion"`
	Name          *string             `json:"Name"`
	State         *WorkGroupStateEnum `json:"State"`
}
