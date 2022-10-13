package shared

import (
	"time"
)

type Alias struct {
	AliasArn        *string          `json:"AliasArn"`
	AliasID         *string          `json:"AliasId"`
	CreationTime    *time.Time       `json:"CreationTime"`
	Description     *string          `json:"Description"`
	LastUpdatedTime *time.Time       `json:"LastUpdatedTime"`
	Name            *string          `json:"Name"`
	RoutingStrategy *RoutingStrategy `json:"RoutingStrategy"`
}
