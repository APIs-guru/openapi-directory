package shared

type RecurringCharge struct {
	Cost      *MonetaryAmount               `json:"cost"`
	Frequency *RecurringChargeFrequencyEnum `json:"frequency"`
}
