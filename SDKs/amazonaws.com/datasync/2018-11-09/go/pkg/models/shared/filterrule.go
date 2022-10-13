package shared

type FilterRule struct {
	FilterType *FilterTypeEnum `json:"FilterType"`
	Value      *string         `json:"Value"`
}
