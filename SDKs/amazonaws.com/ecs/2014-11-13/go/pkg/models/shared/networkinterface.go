package shared

type NetworkInterface struct {
	AttachmentID       *string `json:"attachmentId"`
	Ipv6Address        *string `json:"ipv6Address"`
	PrivateIpv4Address *string `json:"privateIpv4Address"`
}
