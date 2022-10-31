package shared



type FilterRule struct {
    FilterType *FilterTypeEnum `json:"FilterType,omitempty"`
    Value *string `json:"Value,omitempty"`
    
}

