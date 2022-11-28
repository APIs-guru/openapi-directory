package shared

// HostOffering
// Details about the Dedicated Host Reservation offering.
type HostOffering struct {
	CurrencyCode   *CurrencyCodeValuesEnum
	Duration       *int64
	HourlyPrice    *string
	InstanceFamily *string
	OfferingID     *string
	PaymentOption  *PaymentOptionEnum
	UpfrontPrice   *string
}
