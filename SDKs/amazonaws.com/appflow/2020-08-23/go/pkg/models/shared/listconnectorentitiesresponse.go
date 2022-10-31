package shared



type ListConnectorEntitiesResponse struct {
    ConnectorEntityMap map[string][]ConnectorEntity `json:"connectorEntityMap"`
    
}

