package shared

type CapacityReservationStateEnum string

const (
	CapacityReservationStateEnumActive    CapacityReservationStateEnum = "active"
	CapacityReservationStateEnumExpired   CapacityReservationStateEnum = "expired"
	CapacityReservationStateEnumCancelled CapacityReservationStateEnum = "cancelled"
	CapacityReservationStateEnumPending   CapacityReservationStateEnum = "pending"
	CapacityReservationStateEnumFailed    CapacityReservationStateEnum = "failed"
)
