package shared

import (
	"time"
)

type Connection struct {
	ConnectionProperties           map[string]string               `json:"ConnectionProperties,omitempty"`
	ConnectionType                 *ConnectionTypeEnum             `json:"ConnectionType,omitempty"`
	CreationTime                   *time.Time                      `json:"CreationTime,omitempty"`
	Description                    *string                         `json:"Description,omitempty"`
	LastUpdatedBy                  *string                         `json:"LastUpdatedBy,omitempty"`
	LastUpdatedTime                *time.Time                      `json:"LastUpdatedTime,omitempty"`
	MatchCriteria                  []string                        `json:"MatchCriteria,omitempty"`
	Name                           *string                         `json:"Name,omitempty"`
	PhysicalConnectionRequirements *PhysicalConnectionRequirements `json:"PhysicalConnectionRequirements,omitempty"`
}
