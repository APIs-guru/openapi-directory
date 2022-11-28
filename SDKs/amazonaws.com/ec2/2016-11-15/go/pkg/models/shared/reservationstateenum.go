package shared

type ReservationStateEnum string

const (
	ReservationStateEnumPaymentPending ReservationStateEnum = "payment-pending"
	ReservationStateEnumPaymentFailed  ReservationStateEnum = "payment-failed"
	ReservationStateEnumActive         ReservationStateEnum = "active"
	ReservationStateEnumRetired        ReservationStateEnum = "retired"
)
