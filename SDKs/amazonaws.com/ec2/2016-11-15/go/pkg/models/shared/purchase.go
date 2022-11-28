package shared

// Purchase
// Describes the result of the purchase.
type Purchase struct {
	CurrencyCode      *CurrencyCodeValuesEnum
	Duration          *int64
	HostIDSet         []string
	HostReservationID *string
	HourlyPrice       *string
	InstanceFamily    *string
	PaymentOption     *PaymentOptionEnum
	UpfrontPrice      *string
}
