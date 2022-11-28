package shared

// OrderByElement
// A field and direction for ordered output.
type OrderByElement struct {
	FieldName string           `json:"fieldName"`
	SortOrder *OrderStringEnum `json:"sortOrder,omitempty"`
}
