package shared

type Ec2TagFilter struct {
	Key   *string               `json:"Key"`
	Type  *Ec2TagFilterTypeEnum `json:"Type"`
	Value *string               `json:"Value"`
}
