package shared



type ListEngineVersionsOutput struct {
    EngineVersions []EngineVersion `json:"EngineVersions,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

