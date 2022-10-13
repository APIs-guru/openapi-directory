package shared

type DescribeVirtualInterfacesRequest struct {
	ConnectionID       *string `json:"connectionId"`
	VirtualInterfaceID *string `json:"virtualInterfaceId"`
}
