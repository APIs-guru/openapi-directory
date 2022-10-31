package shared



type AllocatePrivateVirtualInterfaceRequest struct {
    ConnectionID string `json:"connectionId"`
    NewPrivateVirtualInterfaceAllocation NewPrivateVirtualInterfaceAllocation `json:"newPrivateVirtualInterfaceAllocation"`
    OwnerAccount string `json:"ownerAccount"`
    
}

