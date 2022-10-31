package shared



type CreateTransitVirtualInterfaceRequest struct {
    ConnectionID string `json:"connectionId"`
    NewTransitVirtualInterface NewTransitVirtualInterface `json:"newTransitVirtualInterface"`
    
}

