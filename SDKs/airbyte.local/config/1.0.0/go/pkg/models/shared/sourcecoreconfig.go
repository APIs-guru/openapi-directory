package shared



type SourceCoreConfig struct {
    ConnectionConfiguration interface{} `json:"connectionConfiguration"`
    SourceDefinitionID string `json:"sourceDefinitionId"`
    
}

