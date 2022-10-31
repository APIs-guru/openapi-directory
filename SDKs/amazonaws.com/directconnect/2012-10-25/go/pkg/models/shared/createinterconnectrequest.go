package shared



type CreateInterconnectRequest struct {
    Bandwidth string `json:"bandwidth"`
    InterconnectName string `json:"interconnectName"`
    LagID *string `json:"lagId,omitempty"`
    Location string `json:"location"`
    ProviderName *string `json:"providerName,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

