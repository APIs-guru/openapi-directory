package shared



type ShareRule struct {
    TargetAccounts []string `json:"TargetAccounts"`
    UnshareInterval *int64 `json:"UnshareInterval,omitempty"`
    UnshareIntervalUnit *RetentionIntervalUnitValuesEnum `json:"UnshareIntervalUnit,omitempty"`
    
}

