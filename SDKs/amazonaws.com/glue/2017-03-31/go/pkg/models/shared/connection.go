package shared

import (
	"time"
)

type Connection struct {
	ConnectionProperties           map[string]string               `json:"ConnectionProperties"`
	ConnectionType                 *ConnectionTypeEnum             `json:"ConnectionType"`
	CreationTime                   *time.Time                      `json:"CreationTime"`
	Description                    *string                         `json:"Description"`
	LastUpdatedBy                  *string                         `json:"LastUpdatedBy"`
	LastUpdatedTime                *time.Time                      `json:"LastUpdatedTime"`
	MatchCriteria                  []string                        `json:"MatchCriteria"`
	Name                           *string                         `json:"Name"`
	PhysicalConnectionRequirements *PhysicalConnectionRequirements `json:"PhysicalConnectionRequirements"`
}
