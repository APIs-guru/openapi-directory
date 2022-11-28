package shared

// ReservationValue
// The cost associated with the Reserved Instance.
type ReservationValue struct {
	HourlyPrice           *string
	RemainingTotalValue   *string
	RemainingUpfrontValue *string
}
