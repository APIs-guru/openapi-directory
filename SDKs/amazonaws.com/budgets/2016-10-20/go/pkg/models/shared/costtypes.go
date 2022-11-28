package shared

// CostTypes
// <p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p>
type CostTypes struct {
	IncludeCredit            *bool `json:"IncludeCredit,omitempty"`
	IncludeDiscount          *bool `json:"IncludeDiscount,omitempty"`
	IncludeOtherSubscription *bool `json:"IncludeOtherSubscription,omitempty"`
	IncludeRecurring         *bool `json:"IncludeRecurring,omitempty"`
	IncludeRefund            *bool `json:"IncludeRefund,omitempty"`
	IncludeSubscription      *bool `json:"IncludeSubscription,omitempty"`
	IncludeSupport           *bool `json:"IncludeSupport,omitempty"`
	IncludeTax               *bool `json:"IncludeTax,omitempty"`
	IncludeUpfront           *bool `json:"IncludeUpfront,omitempty"`
	UseAmortized             *bool `json:"UseAmortized,omitempty"`
	UseBlended               *bool `json:"UseBlended,omitempty"`
}
