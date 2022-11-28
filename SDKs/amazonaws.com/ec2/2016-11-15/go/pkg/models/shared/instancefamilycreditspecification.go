package shared

// InstanceFamilyCreditSpecification
// Describes the default credit option for CPU usage of a burstable performance instance family.
type InstanceFamilyCreditSpecification struct {
	CPUCredits     *string
	InstanceFamily *UnlimitedSupportedInstanceFamilyEnum
}
