package shared



type DestinationCoreConfig struct {
    ConnectionConfiguration interface{} `json:"connectionConfiguration"`
    DestinationDefinitionID string `json:"destinationDefinitionId"`
    
}

