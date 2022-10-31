package shared



type DestinationCreate struct {
    ConnectionConfiguration interface{} `json:"connectionConfiguration"`
    DestinationDefinitionID string `json:"destinationDefinitionId"`
    Name string `json:"name"`
    WorkspaceID string `json:"workspaceId"`
    
}

