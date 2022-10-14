package shared

type MonetaryAmount struct {
	Amount       *float64          `json:"amount,omitempty"`
	CurrencyCode *CurrencyCodeEnum `json:"currencyCode,omitempty"`
}
