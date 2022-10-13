package shared

type AllocateTransitVirtualInterfaceRequest struct {
	ConnectionID                         string                               `json:"connectionId"`
	NewTransitVirtualInterfaceAllocation NewTransitVirtualInterfaceAllocation `json:"newTransitVirtualInterfaceAllocation"`
	OwnerAccount                         string                               `json:"ownerAccount"`
}
