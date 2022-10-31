package shared

type AgentInfo struct {
	AgentID              *string            `json:"agentId,omitempty"`
	AgentNetworkInfoList []AgentNetworkInfo `json:"agentNetworkInfoList,omitempty"`
	AgentType            *string            `json:"agentType,omitempty"`
	CollectionStatus     *string            `json:"collectionStatus,omitempty"`
	ConnectorID          *string            `json:"connectorId,omitempty"`
	Health               *AgentStatusEnum   `json:"health,omitempty"`
	HostName             *string            `json:"hostName,omitempty"`
	LastHealthPingTime   *string            `json:"lastHealthPingTime,omitempty"`
	RegisteredTime       *string            `json:"registeredTime,omitempty"`
	Version              *string            `json:"version,omitempty"`
}
