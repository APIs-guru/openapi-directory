package shared

// ActiveInstance
// Describes a running instance in a Spot Fleet.
type ActiveInstance struct {
	InstanceHealth        *InstanceHealthStatusEnum
	InstanceID            *string
	InstanceType          *string
	SpotInstanceRequestID *string
}
