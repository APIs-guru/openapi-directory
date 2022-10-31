package shared



type SourceCreate struct {
    ConnectionConfiguration interface{} `json:"connectionConfiguration"`
    Name string `json:"name"`
    SourceDefinitionID string `json:"sourceDefinitionId"`
    WorkspaceID string `json:"workspaceId"`
    
}

