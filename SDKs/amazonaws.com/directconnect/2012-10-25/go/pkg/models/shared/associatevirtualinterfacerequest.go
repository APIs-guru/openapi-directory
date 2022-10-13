package shared

type AssociateVirtualInterfaceRequest struct {
	ConnectionID       string `json:"connectionId"`
	VirtualInterfaceID string `json:"virtualInterfaceId"`
}
