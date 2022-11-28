package shared

// NetworkInterface
// Describes a network interface.
type NetworkInterface struct {
	NetworkInterfaceID *string `json:"networkInterfaceId,omitempty"`
	SubnetID           *string `json:"subnetId,omitempty"`
}
