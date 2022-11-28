package shared

// NetworkAccessConfiguration
// Describes the network details of the fleet or image builder instance.
type NetworkAccessConfiguration struct {
	EniID               *string `json:"EniId,omitempty"`
	EniPrivateIPAddress *string `json:"EniPrivateIpAddress,omitempty"`
}
