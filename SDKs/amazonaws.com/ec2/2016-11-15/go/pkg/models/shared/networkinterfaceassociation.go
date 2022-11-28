package shared

// NetworkInterfaceAssociation
// Describes association information for an Elastic IP address (IPv4 only), or a Carrier IP address (for a network interface which resides in a subnet in a Wavelength Zone).
type NetworkInterfaceAssociation struct {
	AllocationID    *string
	AssociationID   *string
	CarrierIP       *string
	CustomerOwnedIP *string
	IPOwnerID       *string
	PublicDNSName   *string
	PublicIP        *string
}
