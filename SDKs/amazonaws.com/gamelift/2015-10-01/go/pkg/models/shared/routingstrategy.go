package shared

// RoutingStrategy
// <p>The routing configuration for a fleet alias.</p> <p> <b>Related actions</b> </p> <p> <a>CreateAlias</a> | <a>ListAliases</a> | <a>DescribeAlias</a> | <a>UpdateAlias</a> | <a>DeleteAlias</a> | <a>ResolveAlias</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
type RoutingStrategy struct {
	FleetID *string                  `json:"FleetId,omitempty"`
	Message *string                  `json:"Message,omitempty"`
	Type    *RoutingStrategyTypeEnum `json:"Type,omitempty"`
}
