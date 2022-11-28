package shared

// InstanceStatus
// Describes the status of an instance.
type InstanceStatus struct {
	AvailabilityZone *string
	Events           []InstanceStatusEvent
	InstanceID       *string
	InstanceState    *InstanceState
	InstanceStatus   *InstanceStatusSummary
	OutpostArn       *string
	SystemStatus     *InstanceStatusSummary
}
