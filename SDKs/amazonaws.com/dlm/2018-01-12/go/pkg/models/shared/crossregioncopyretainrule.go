package shared



type CrossRegionCopyRetainRule struct {
    Interval *int64 `json:"Interval,omitempty"`
    IntervalUnit *RetentionIntervalUnitValuesEnum `json:"IntervalUnit,omitempty"`
    
}

