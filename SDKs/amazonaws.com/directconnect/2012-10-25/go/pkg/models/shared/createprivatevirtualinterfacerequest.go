package shared



type CreatePrivateVirtualInterfaceRequest struct {
    ConnectionID string `json:"connectionId"`
    NewPrivateVirtualInterface NewPrivateVirtualInterface `json:"newPrivateVirtualInterface"`
    
}

