package shared

type AgentInfo struct {
	AgentID              *string            `json:"agentId"`
	AgentNetworkInfoList []AgentNetworkInfo `json:"agentNetworkInfoList"`
	AgentType            *string            `json:"agentType"`
	CollectionStatus     *string            `json:"collectionStatus"`
	ConnectorID          *string            `json:"connectorId"`
	Health               *AgentStatusEnum   `json:"health"`
	HostName             *string            `json:"hostName"`
	LastHealthPingTime   *string            `json:"lastHealthPingTime"`
	RegisteredTime       *string            `json:"registeredTime"`
	Version              *string            `json:"version"`
}
