package shared

type ConnectivityInfo struct {
	HostAddress *string `json:"HostAddress"`
	ID          *string `json:"Id"`
	Metadata    *string `json:"Metadata"`
	PortNumber  *int64  `json:"PortNumber"`
}
