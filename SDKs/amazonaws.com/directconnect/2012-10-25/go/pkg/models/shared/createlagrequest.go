package shared



type CreateLagRequest struct {
    ChildConnectionTags []Tag `json:"childConnectionTags,omitempty"`
    ConnectionID *string `json:"connectionId,omitempty"`
    ConnectionsBandwidth string `json:"connectionsBandwidth"`
    LagName string `json:"lagName"`
    Location string `json:"location"`
    NumberOfConnections int64 `json:"numberOfConnections"`
    ProviderName *string `json:"providerName,omitempty"`
    RequestMacSec *bool `json:"requestMACSec,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

