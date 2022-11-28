package shared

// InstanceCapacity
// Information about the number of instances that can be launched onto the Dedicated Host.
type InstanceCapacity struct {
	AvailableCapacity *int64
	InstanceType      *string
	TotalCapacity     *int64
}
