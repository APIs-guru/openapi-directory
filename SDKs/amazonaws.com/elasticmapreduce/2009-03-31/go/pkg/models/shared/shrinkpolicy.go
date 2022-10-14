package shared

type ShrinkPolicy struct {
	DecommissionTimeout  *int64                `json:"DecommissionTimeout,omitempty"`
	InstanceResizePolicy *InstanceResizePolicy `json:"InstanceResizePolicy,omitempty"`
}
