package shared

// Address
// Describes an Elastic IP address, or a carrier IP address.
type Address struct {
	AllocationID            *string
	AssociationID           *string
	CarrierIP               *string
	CustomerOwnedIP         *string
	CustomerOwnedIpv4Pool   *string
	Domain                  *DomainTypeEnum
	InstanceID              *string
	NetworkBorderGroup      *string
	NetworkInterfaceID      *string
	NetworkInterfaceOwnerID *string
	PrivateIPAddress        *string
	PublicIP                *string
	PublicIpv4Pool          *string
	Tags                    []Tag
}
