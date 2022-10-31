package shared

type SortCriterion struct {
	FieldName *string   `json:"FieldName,omitempty"`
	Sort      *SortEnum `json:"Sort,omitempty"`
}
