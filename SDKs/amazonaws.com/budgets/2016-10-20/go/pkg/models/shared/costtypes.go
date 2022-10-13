package shared

type CostTypes struct {
	IncludeCredit            *bool `json:"IncludeCredit"`
	IncludeDiscount          *bool `json:"IncludeDiscount"`
	IncludeOtherSubscription *bool `json:"IncludeOtherSubscription"`
	IncludeRecurring         *bool `json:"IncludeRecurring"`
	IncludeRefund            *bool `json:"IncludeRefund"`
	IncludeSubscription      *bool `json:"IncludeSubscription"`
	IncludeSupport           *bool `json:"IncludeSupport"`
	IncludeTax               *bool `json:"IncludeTax"`
	IncludeUpfront           *bool `json:"IncludeUpfront"`
	UseAmortized             *bool `json:"UseAmortized"`
	UseBlended               *bool `json:"UseBlended"`
}
