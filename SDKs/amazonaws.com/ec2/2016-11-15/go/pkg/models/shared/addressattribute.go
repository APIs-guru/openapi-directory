package shared

// AddressAttribute
// The attributes associated with an Elastic IP address.
type AddressAttribute struct {
	AllocationID    *string
	PtrRecord       *string
	PtrRecordUpdate *PtrUpdateStatus
	PublicIP        *string
}
