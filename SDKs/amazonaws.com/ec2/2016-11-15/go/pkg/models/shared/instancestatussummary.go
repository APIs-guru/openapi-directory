package shared

// InstanceStatusSummary
// Describes the status of an instance.
type InstanceStatusSummary struct {
	Details []InstanceStatusDetails
	Status  *SummaryStatusEnum
}
