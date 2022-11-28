package shared

// TaskRunSortCriteria
// The sorting criteria that are used to sort the list of task runs for the machine learning transform.
type TaskRunSortCriteria struct {
	Column        TaskRunSortColumnTypeEnum `json:"Column"`
	SortDirection SortDirectionTypeEnum     `json:"SortDirection"`
}
