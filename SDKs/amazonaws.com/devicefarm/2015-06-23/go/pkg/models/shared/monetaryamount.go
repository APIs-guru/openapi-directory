package shared

// MonetaryAmount
// A number that represents the monetary amount for an offering or transaction.
type MonetaryAmount struct {
	Amount       *float64          `json:"amount,omitempty"`
	CurrencyCode *CurrencyCodeEnum `json:"currencyCode,omitempty"`
}
