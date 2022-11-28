package shared

// InstanceCreditSpecification
// Describes the credit option for CPU usage of a burstable performance instance.
type InstanceCreditSpecification struct {
	CPUCredits *string
	InstanceID *string
}
