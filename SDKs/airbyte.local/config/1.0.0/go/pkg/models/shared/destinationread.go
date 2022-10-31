package shared



type DestinationRead struct {
    ConnectionConfiguration interface{} `json:"connectionConfiguration"`
    DestinationDefinitionID string `json:"destinationDefinitionId"`
    DestinationID string `json:"destinationId"`
    DestinationName string `json:"destinationName"`
    Name string `json:"name"`
    WorkspaceID string `json:"workspaceId"`
    
}

