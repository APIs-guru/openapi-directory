package shared



type DestinationRecreate struct {
    ConnectionConfiguration interface{} `json:"connectionConfiguration"`
    DestinationDefinitionID string `json:"destinationDefinitionId"`
    DestinationID string `json:"destinationId"`
    Name string `json:"name"`
    WorkspaceID string `json:"workspaceId"`
    
}

