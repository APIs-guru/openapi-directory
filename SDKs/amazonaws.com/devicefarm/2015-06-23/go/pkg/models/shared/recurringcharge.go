package shared



type RecurringCharge struct {
    Cost *MonetaryAmount `json:"cost,omitempty"`
    Frequency *RecurringChargeFrequencyEnum `json:"frequency,omitempty"`
    
}

