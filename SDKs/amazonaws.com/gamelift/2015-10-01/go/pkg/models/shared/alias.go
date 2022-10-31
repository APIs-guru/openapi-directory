package shared

import (
	"time"
)

type Alias struct {
	AliasArn        *string          `json:"AliasArn,omitempty"`
	AliasID         *string          `json:"AliasId,omitempty"`
	CreationTime    *time.Time       `json:"CreationTime,omitempty"`
	Description     *string          `json:"Description,omitempty"`
	LastUpdatedTime *time.Time       `json:"LastUpdatedTime,omitempty"`
	Name            *string          `json:"Name,omitempty"`
	RoutingStrategy *RoutingStrategy `json:"RoutingStrategy,omitempty"`
}
