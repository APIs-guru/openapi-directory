package shared

// PtrUpdateStatus
// The status of an updated pointer (PTR) record for an Elastic IP address.
type PtrUpdateStatus struct {
	Reason *string
	Status *string
	Value  *string
}
