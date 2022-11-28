package shared

type ImageStateEnum string

const (
	ImageStateEnumPending      ImageStateEnum = "pending"
	ImageStateEnumAvailable    ImageStateEnum = "available"
	ImageStateEnumInvalid      ImageStateEnum = "invalid"
	ImageStateEnumDeregistered ImageStateEnum = "deregistered"
	ImageStateEnumTransient    ImageStateEnum = "transient"
	ImageStateEnumFailed       ImageStateEnum = "failed"
	ImageStateEnumError        ImageStateEnum = "error"
)
