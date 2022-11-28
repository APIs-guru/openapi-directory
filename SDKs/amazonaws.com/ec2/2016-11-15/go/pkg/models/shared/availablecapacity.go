package shared

// AvailableCapacity
// The capacity information for instances that can be launched onto the Dedicated Host.
type AvailableCapacity struct {
	AvailableInstanceCapacity []InstanceCapacity
	AvailableVCpus            *int64
}
