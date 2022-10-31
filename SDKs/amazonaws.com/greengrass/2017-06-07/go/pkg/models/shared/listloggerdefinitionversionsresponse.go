package shared



type ListLoggerDefinitionVersionsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Versions []VersionInformation `json:"Versions,omitempty"`
    
}

