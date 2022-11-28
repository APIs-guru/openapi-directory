package shared

// SourceDataColumnProperties
// An object that contains the properties for importing data to a specific column in a table.
type SourceDataColumnProperties struct {
	ColumnIndex *int64 `json:"columnIndex,omitempty"`
}
