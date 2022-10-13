package shared

type GetConnectionsFilter struct {
	ConnectionType *ConnectionTypeEnum `json:"ConnectionType"`
	MatchCriteria  []string            `json:"MatchCriteria"`
}
