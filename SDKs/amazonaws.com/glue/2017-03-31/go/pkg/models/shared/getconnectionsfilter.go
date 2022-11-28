package shared

// GetConnectionsFilter
// Filters the connection definitions that are returned by the <code>GetConnections</code> API operation.
type GetConnectionsFilter struct {
	ConnectionType *ConnectionTypeEnum `json:"ConnectionType,omitempty"`
	MatchCriteria  []string            `json:"MatchCriteria,omitempty"`
}
