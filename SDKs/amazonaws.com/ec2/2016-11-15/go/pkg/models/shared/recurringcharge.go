package shared

// RecurringCharge
// Describes a recurring charge.
type RecurringCharge struct {
	Amount    *float64
	Frequency *RecurringChargeFrequencyEnum
}
