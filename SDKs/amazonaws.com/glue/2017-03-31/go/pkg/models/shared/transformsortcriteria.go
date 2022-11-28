package shared

// TransformSortCriteria
// The sorting criteria that are associated with the machine learning transform.
type TransformSortCriteria struct {
	Column        TransformSortColumnTypeEnum `json:"Column"`
	SortDirection SortDirectionTypeEnum       `json:"SortDirection"`
}
