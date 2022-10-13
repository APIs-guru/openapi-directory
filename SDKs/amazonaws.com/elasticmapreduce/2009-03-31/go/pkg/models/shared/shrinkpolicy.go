package shared

type ShrinkPolicy struct {
	DecommissionTimeout  *int64                `json:"DecommissionTimeout"`
	InstanceResizePolicy *InstanceResizePolicy `json:"InstanceResizePolicy"`
}
