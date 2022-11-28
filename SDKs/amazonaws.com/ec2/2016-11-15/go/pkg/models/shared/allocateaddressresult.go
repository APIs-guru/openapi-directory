package shared

type AllocateAddressResult struct {
	AllocationID          *string
	CarrierIP             *string
	CustomerOwnedIP       *string
	CustomerOwnedIpv4Pool *string
	Domain                *DomainTypeEnum
	NetworkBorderGroup    *string
	PublicIP              *string
	PublicIpv4Pool        *string
}
