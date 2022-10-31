package shared



type Usage struct {
    EndDate *string `json:"endDate,omitempty"`
    Items map[string][][]int64 `json:"items,omitempty"`
    Position *string `json:"position,omitempty"`
    StartDate *string `json:"startDate,omitempty"`
    UsagePlanID *string `json:"usagePlanId,omitempty"`
    
}

