package shared



type AllocatePublicVirtualInterfaceRequest struct {
    ConnectionID string `json:"connectionId"`
    NewPublicVirtualInterfaceAllocation NewPublicVirtualInterfaceAllocation `json:"newPublicVirtualInterfaceAllocation"`
    OwnerAccount string `json:"ownerAccount"`
    
}

