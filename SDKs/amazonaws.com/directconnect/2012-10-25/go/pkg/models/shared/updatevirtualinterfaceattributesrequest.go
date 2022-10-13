package shared

type UpdateVirtualInterfaceAttributesRequest struct {
	Mtu                *int64 `json:"mtu"`
	VirtualInterfaceID string `json:"virtualInterfaceId"`
}
