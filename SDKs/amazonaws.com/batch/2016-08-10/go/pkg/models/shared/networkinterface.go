package shared

// NetworkInterface
// An object representing the elastic network interface for a multi-node parallel job node.
type NetworkInterface struct {
	AttachmentID       *string `json:"attachmentId,omitempty"`
	Ipv6Address        *string `json:"ipv6Address,omitempty"`
	PrivateIpv4Address *string `json:"privateIpv4Address,omitempty"`
}
