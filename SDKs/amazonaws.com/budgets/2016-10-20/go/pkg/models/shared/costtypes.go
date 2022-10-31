package shared



type CostTypes struct {
    IncludeCredit *bool `json:"IncludeCredit,omitempty"`
    IncludeDiscount *bool `json:"IncludeDiscount,omitempty"`
    IncludeOtherSubscription *bool `json:"IncludeOtherSubscription,omitempty"`
    IncludeRecurring *bool `json:"IncludeRecurring,omitempty"`
    IncludeRefund *bool `json:"IncludeRefund,omitempty"`
    IncludeSubscription *bool `json:"IncludeSubscription,omitempty"`
    IncludeSupport *bool `json:"IncludeSupport,omitempty"`
    IncludeTax *bool `json:"IncludeTax,omitempty"`
    IncludeUpfront *bool `json:"IncludeUpfront,omitempty"`
    UseAmortized *bool `json:"UseAmortized,omitempty"`
    UseBlended *bool `json:"UseBlended,omitempty"`
    
}

