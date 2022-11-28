package shared

// Ec2TagFilter
// Information about an EC2 tag filter.
type Ec2TagFilter struct {
	Key   *string               `json:"Key,omitempty"`
	Type  *Ec2TagFilterTypeEnum `json:"Type,omitempty"`
	Value *string               `json:"Value,omitempty"`
}
