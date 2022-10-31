package shared



type CreatePublicVirtualInterfaceRequest struct {
    ConnectionID string `json:"connectionId"`
    NewPublicVirtualInterface NewPublicVirtualInterface `json:"newPublicVirtualInterface"`
    
}

