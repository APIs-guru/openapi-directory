package shared



type AllocateHostedConnectionRequest struct {
    Bandwidth string `json:"bandwidth"`
    ConnectionID string `json:"connectionId"`
    ConnectionName string `json:"connectionName"`
    OwnerAccount string `json:"ownerAccount"`
    Tags []Tag `json:"tags,omitempty"`
    Vlan int64 `json:"vlan"`
    
}

