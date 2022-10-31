package shared



type ListCoreDefinitionVersionsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Versions []VersionInformation `json:"Versions,omitempty"`
    
}

