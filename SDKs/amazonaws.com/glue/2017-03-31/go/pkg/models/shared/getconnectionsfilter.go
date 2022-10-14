package shared

type GetConnectionsFilter struct {
	ConnectionType *ConnectionTypeEnum `json:"ConnectionType,omitempty"`
	MatchCriteria  []string            `json:"MatchCriteria,omitempty"`
}
