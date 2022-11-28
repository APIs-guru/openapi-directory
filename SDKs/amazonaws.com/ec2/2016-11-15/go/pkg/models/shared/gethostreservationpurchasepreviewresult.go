package shared

type GetHostReservationPurchasePreviewResult struct {
	CurrencyCode      *CurrencyCodeValuesEnum
	Purchase          []Purchase
	TotalHourlyPrice  *string
	TotalUpfrontPrice *string
}
