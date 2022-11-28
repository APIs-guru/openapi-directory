package shared

// ConnectivityInfo
// Information about a Greengrass core's connectivity.
type ConnectivityInfo struct {
	HostAddress *string `json:"HostAddress,omitempty"`
	ID          *string `json:"Id,omitempty"`
	Metadata    *string `json:"Metadata,omitempty"`
	PortNumber  *int64  `json:"PortNumber,omitempty"`
}
