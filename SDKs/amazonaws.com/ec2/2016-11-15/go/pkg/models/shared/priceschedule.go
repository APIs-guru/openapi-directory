package shared

// PriceSchedule
// Describes the price for a Reserved Instance.
type PriceSchedule struct {
	Active       *bool
	CurrencyCode *CurrencyCodeValuesEnum
	Price        *float64
	Term         *int64
}
