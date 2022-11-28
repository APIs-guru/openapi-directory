package shared

// ShrinkPolicy
// Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking.
type ShrinkPolicy struct {
	DecommissionTimeout  *int64                `json:"DecommissionTimeout,omitempty"`
	InstanceResizePolicy *InstanceResizePolicy `json:"InstanceResizePolicy,omitempty"`
}
