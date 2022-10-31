package shared



type SourceRead struct {
    ConnectionConfiguration interface{} `json:"connectionConfiguration"`
    Name string `json:"name"`
    SourceDefinitionID string `json:"sourceDefinitionId"`
    SourceID string `json:"sourceId"`
    SourceName string `json:"sourceName"`
    WorkspaceID string `json:"workspaceId"`
    
}

