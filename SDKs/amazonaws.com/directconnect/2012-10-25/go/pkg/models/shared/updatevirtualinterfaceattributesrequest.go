package shared



type UpdateVirtualInterfaceAttributesRequest struct {
    Mtu *int64 `json:"mtu,omitempty"`
    VirtualInterfaceID string `json:"virtualInterfaceId"`
    
}

