package shared



type GetBlueprintRequest struct {
    IncludeBlueprint *bool `json:"IncludeBlueprint,omitempty"`
    IncludeParameterSpec *bool `json:"IncludeParameterSpec,omitempty"`
    Name string `json:"Name"`
    
}

