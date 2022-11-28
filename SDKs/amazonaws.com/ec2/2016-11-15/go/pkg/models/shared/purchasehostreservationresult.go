package shared

type PurchaseHostReservationResult struct {
	ClientToken       *string
	CurrencyCode      *CurrencyCodeValuesEnum
	Purchase          []Purchase
	TotalHourlyPrice  *string
	TotalUpfrontPrice *string
}
