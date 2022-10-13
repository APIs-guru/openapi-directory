package shared

type TagFilter struct {
	Key   *string            `json:"Key"`
	Type  *TagFilterTypeEnum `json:"Type"`
	Value *string            `json:"Value"`
}
