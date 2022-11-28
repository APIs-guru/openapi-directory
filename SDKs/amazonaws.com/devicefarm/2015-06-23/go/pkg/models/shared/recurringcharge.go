package shared

// RecurringCharge
// Specifies whether charges for devices are recurring.
type RecurringCharge struct {
	Cost      *MonetaryAmount               `json:"cost,omitempty"`
	Frequency *RecurringChargeFrequencyEnum `json:"frequency,omitempty"`
}
