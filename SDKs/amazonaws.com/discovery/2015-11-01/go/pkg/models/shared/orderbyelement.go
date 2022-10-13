package shared

type OrderByElement struct {
	FieldName string           `json:"fieldName"`
	SortOrder *OrderStringEnum `json:"sortOrder"`
}
