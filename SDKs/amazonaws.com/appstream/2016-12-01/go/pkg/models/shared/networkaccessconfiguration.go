package shared

type NetworkAccessConfiguration struct {
	EniID               *string `json:"EniId"`
	EniPrivateIPAddress *string `json:"EniPrivateIpAddress"`
}
