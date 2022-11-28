package shared

// InstanceNetworkInterfaceAssociation
// Describes association information for an Elastic IP address (IPv4).
type InstanceNetworkInterfaceAssociation struct {
	CarrierIP     *string
	IPOwnerID     *string
	PublicDNSName *string
	PublicIP      *string
}
