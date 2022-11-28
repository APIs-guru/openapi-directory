package shared

import (
	"time"
)

// Alias
// <p>Properties that describe an alias resource.</p> <p> <b>Related actions</b> </p> <p> <a>CreateAlias</a> | <a>ListAliases</a> | <a>DescribeAlias</a> | <a>UpdateAlias</a> | <a>DeleteAlias</a> | <a>ResolveAlias</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
type Alias struct {
	AliasArn        *string          `json:"AliasArn,omitempty"`
	AliasID         *string          `json:"AliasId,omitempty"`
	CreationTime    *time.Time       `json:"CreationTime,omitempty"`
	Description     *string          `json:"Description,omitempty"`
	LastUpdatedTime *time.Time       `json:"LastUpdatedTime,omitempty"`
	Name            *string          `json:"Name,omitempty"`
	RoutingStrategy *RoutingStrategy `json:"RoutingStrategy,omitempty"`
}
