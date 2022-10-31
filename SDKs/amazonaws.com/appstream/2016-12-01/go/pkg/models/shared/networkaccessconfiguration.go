package shared

type NetworkAccessConfiguration struct {
	EniID               *string `json:"EniId,omitempty"`
	EniPrivateIPAddress *string `json:"EniPrivateIpAddress,omitempty"`
}
