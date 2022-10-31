package shared



type ListResourceDefinitionVersionsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Versions []VersionInformation `json:"Versions,omitempty"`
    
}

