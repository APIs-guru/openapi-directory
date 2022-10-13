package shared

type MonetaryAmount struct {
	Amount       *float64          `json:"amount"`
	CurrencyCode *CurrencyCodeEnum `json:"currencyCode"`
}
