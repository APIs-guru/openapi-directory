package shared

// SortCriterion
// Specifies a field to sort by and a sort order.
type SortCriterion struct {
	FieldName *string   `json:"FieldName,omitempty"`
	Sort      *SortEnum `json:"Sort,omitempty"`
}
