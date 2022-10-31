package shared



type RetentionPeriod struct {
    NumberOfDays *int64 `json:"numberOfDays,omitempty"`
    Unlimited *bool `json:"unlimited,omitempty"`
    
}

