package shared

// FilterRule
// Specifies which files, folders, and objects to include or exclude when transferring files from source to destination.
type FilterRule struct {
	FilterType *FilterTypeEnum `json:"FilterType,omitempty"`
	Value      *string         `json:"Value,omitempty"`
}
