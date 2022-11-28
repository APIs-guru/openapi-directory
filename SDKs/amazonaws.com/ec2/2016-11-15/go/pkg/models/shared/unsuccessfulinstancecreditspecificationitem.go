package shared

// UnsuccessfulInstanceCreditSpecificationItem
// Describes the burstable performance instance whose credit option for CPU usage was not modified.
type UnsuccessfulInstanceCreditSpecificationItem struct {
	Error      *UnsuccessfulInstanceCreditSpecificationItemError
	InstanceID *string
}
